class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :authentications, dependent: :destroy, inverse_of: :user
  has_many :permissions
  has_many :roles, through: :permissions

  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

  enum create_method: %i{sign_up oauth}

  def display_name
    name || email
  end

  ####################################################
  #
  # Omniauth related methods
  #
  def self.for_auth(auth)
    Authentication.for_auth(auth)&.user
  end

  def apply_oauth(auth)
    self.attributes = User.params_for_create(auth)
    setup_authentication(auth)
  end

  def update_oauth(auth)
    setup_authentication(auth)
  end

  def self.oauth_name(auth)
    info = auth["info"] || {}
    raw_info = auth["extra"]["raw_info"] || {}

    info["name"] ||
      "#{info['first_name']} #{info['last_name']}" ||
      info["nickname"] ||
      raw_info["name"] ||
      raw_info["short_name"] ||
      raw_info["login_id"]
  end

  def self.oauth_email(auth)
    info = auth["info"] || {}
    raw_info = auth["extra"]["raw_info"] || {}

    email = info["email"] ||
      raw_info["primary_email"] ||
      raw_info["login_id"]

    # Try a basic validation on the email
    if email =~ /\A[^@]+@[^@]+\Z/
      email
    else
      # we have to make one up
      domain = UrlHelper.safe_host(info["url"])
      name = auth["uid"]
      "#{name}@#{domain}"
    end
  end

  def self.oauth_timezone(auth)
    info = auth["info"] || {}
    raw_info = auth["extra"]["raw_info"] || {}

    timezone = ActiveSupport::TimeZone.new(raw_info["time_zone"]) unless raw_info["time_zone"].blank?
    timezone ||= ActiveSupport::TimeZone[info["timezone"].try(:to_i)].name unless info["timezone"].blank?
    timezone
  end

  def self.params_for_create(auth)
    {
      email: oauth_email(auth),
      name: oauth_name(auth),
      time_zone: oauth_timezone(auth),
    }
  end

  def setup_authentication(auth)
    attributes = Authentication.authentication_attrs_from_auth(auth)
    if persisted? &&
        authentication = authentications.find_by(
          provider: attributes[:provider],
          provider_url: attributes[:provider_url],
        )
      authentication.update_attributes!(attributes)
    else
      authentications.build(attributes)
    end
  end

  def associate_account(auth)
    info = auth["info"] || {}
    raw_info = auth["extra"]["raw_info"] || {}
    self.name ||= oauth_name(info, raw_info)
    self.time_zone ||= oauth_timezone(info)
    save!
    setup_authentication(auth)
  end

  ####################################################
  #
  # Role related methods
  #
  def set_default_role
    self.role ||= :user
  end

  def context_roles(context_id = nil)
    roles.where(permissions: { context_id: context_id }).distinct
  end

  def nil_or_context_roles(context_id = nil)
    roles.where(permissions: { context_id: [context_id, nil] }).distinct
  end

  def role?(name, context_id = nil)
    has_role?(context_id, name)
  end

  def has_role?(context_id, *test_names)
    test_names = [test_names] unless test_names.is_a?(Array)
    test_names = test_names.map(&:downcase).flatten
    @role_names = nil_or_context_roles(context_id).map(&:name).map(&:downcase) if @role_names.blank?
    return false if @role_names.blank?
    !(@role_names & test_names).empty?
  end

  def any_role?(*test_names)
    has_role?(nil, *test_names)
  end

  # Add the user to a new role
  def add_to_role(name, context_id = nil)
    role = Role.where(name: name).first_or_create
    # Make sure that the user can only be put into a role once
    if context_roles(context_id).exclude?(role)
      Permission.create(user: self, role: role, context_id: context_id)
    end
  end

  def admin?
    role?("administrator")
  end

  def can_edit?(user)
    return false if user.nil?
    id == user.id || user.admin?
  end

  def self.convert_name_to_initials(sortable_name)
    parts = sortable_name.split(",")
    "#{parts[1].strip[0]}#{parts[0].strip[0]}".upcase
  rescue
    return "?" unless sortable_name && !sortable_name.empty?
    return sortable_name[0..1].upcase if sortable_name.length > 1
    sortable_name[0]
  end

end
