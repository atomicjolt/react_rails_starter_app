class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  enum role: [:user, :admin]

  after_initialize :set_default_role, :if => :new_record?

  has_many :authentications, :dependent => :destroy, :inverse_of => :user

  has_many :permissions
  has_many :roles, :through => :permissions

  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

  def display_name
    self.name || self.email
  end

  def password_required?
    (authentications.empty? || !password.blank?) && super
  end

  ####################################################
  #
  # Omniauth related methods
  #
  def self.find_for_oauth(auth)
    authentication = Authentication.where(:uid => auth['uid'].to_s, :provider => auth['provider']).first
    authentication.user if authentication
  end

  def apply_oauth(auth)
    self.attributes = User.params_for_create(auth)
    self.setup_authentication(auth)
  end

  def update_oauth(auth)
    self.setup_authentication(auth)
  end

  def self.params_for_create(auth)
    data = auth['info'] || {}
    name = data['name'] rescue nil
    name ||= "#{data['first_name']} #{data['last_name']}"
    {
      :email => data['email'],
      :name => name,
      :time_zone => (ActiveSupport::TimeZone[data['timezone'].try(:to_i)].name unless data['timezone'].blank? rescue nil)
    }
  end

  def setup_authentication(auth)
    attributes = {
      :uid => auth['uid'].to_s,
      :username => auth['info']['nickname'],
      :provider => auth['provider'],
      :provider_url => UrlHelper.scheme_host(auth['info']['url']),
      :json_response => auth.to_json
    }
    if credentials = auth['credentials']
      attributes[:token] = credentials['token']
      attributes[:secret] = credentials['secret']
      attributes[:refresh_token] = credentials['refresh_token'] if credentials['refresh_token'] # Google sends a refresh token
    end
    if self.persisted? && authentication = self.authentications.where({:provider => auth['provider'], :provider_url => auth['info']['url']}).first
      authentication.update_attributes!(attributes)
    else
      self.authentications.build(attributes)
    end
  end

  def associate_account(auth)
    data = auth['info'] || {}
    name = data['name'] rescue nil
    name ||= "#{data['first_name']} #{data['last_name']}"
    self.name ||= name
    self.time_zone ||= (ActiveSupport::TimeZone[data['timezone'].try(:to_i)].name unless data['timezone'].blank? rescue nil)
    self.save!
    self.setup_authentication(auth)
  end

  ####################################################
  #
  # Role related methods
  #
  def set_default_role
    self.role ||= :user
  end

  def is_in_role?(object, roles)
    raise 'not implemented'
  end

  def role?(name)
    self.any_role?(name)
  end

  def any_role?(*test_names)
    test_names = [test_names] unless test_names.is_a?(Array)
    test_names.flatten!
    @role_names = self.roles.map(&:name) if @role_names.blank?
    return false if @role_names.blank?
    (@role_names & test_names).length > 0
  end

  # Add the user to a new role
  def add_to_role(name)
    @role_names = nil
    role = Role.find_or_create_by(name: name)
    self.roles << role if !self.roles.include?(role) # Make sure that the user can only be put into a role once
  end

  def admin?
    self.role?('administrator')
  end

  def can_edit?(user)
    return false if user.nil?
    self.id == user.id || user.admin?
  end

end
