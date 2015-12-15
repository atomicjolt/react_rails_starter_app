class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :authentications, :dependent => :destroy, :inverse_of => :user

  belongs_to :account

  has_many :user_courses, dependent: :destroy
  has_many :courses, through: :user_courses
  has_many :sections, through: :courses

  has_one :profile, :dependent => :destroy

  after_create {|user| user.create_profile unless user.profile }

  def canvas_api
    if auth = self.canvas_auth
      options = {
        auth: auth,
        client_id: Rails.application.secrets.developer_id,
        client_secret: Rails.application.secrets.developer_key,
        redirect_uri: 'https://bryan-attendance.lvh.me/auth/canvas/callback',#user_omniauth_callback_path(:canvas),
        refresh_token: auth.refresh_token
      }
      Canvas.new(self.account.canvas_uri, auth.token, options)
    else
      return nil
    end
  end

  def canvas_auth
    self.authentications.find_by(provider_url: self.account.canvas_uri)
  end

  def display_name
    self.name || self.email
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
    self.associate_profile(auth)
    self.setup_authentication(auth)
  end

  def update_oauth(auth)
    self.associate_profile(auth)
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
    data = auth['credentials']
    if data
      attributes[:token] = data['token']
      attributes[:secret] = data['secret']
      attributes[:refresh_token] = data['refresh_token'] if data['refresh_token'] # Google sends a refresh token
    end
    if self.persisted? && authentication = self.authentications.where({:provider => auth['provider'], :provider_url => auth['info']['url']}).first
      authentication.update_attributes!(attributes)
    else
      self.authentications.build(attributes)
    end
  end

  def password_required?
    (authentications.empty? || !password.blank?) && super
  end

  def associate_profile(auth)
    self.build_profile unless self.profile
    self.profile.about ||= auth['info']['description']
    self.profile.location ||= auth['info']['location']
    if auth['info']['urls']
      self.profile.website ||= auth['info']['urls']['Website']
      self.profile.twitter ||= auth['info']['urls']['Twitter']
      self.profile.facebook ||= auth['info']['urls']['Facebook']
      self.profile.linkedin ||= auth['info']['urls']['public_profile']
      self.profile.blog ||= auth['info']['urls']['Blog']
    end
  end

  def associate_oauth_account(auth)
    data = auth['info'] || {}
    name = data['name'] rescue nil
    name ||= "#{data['first_name']} #{data['last_name']}"
    self.name ||= name
    self.time_zone ||= (ActiveSupport::TimeZone[data['timezone'].try(:to_i)].name unless data['timezone'].blank? rescue nil)
    self.associate_profile(auth)
    self.save!
    self.setup_authentication(auth)
  end

  def formatted_bio
    self.bio.gsub(/\n/, '<br />') unless self.bio.blank?
  end

  def can_edit?(user)
    return false if user.nil?
    self.id == user.id || user.admin
  end

  def self.convert_name_to_initials(sortable_name)
    parts = sortable_name.split(',')
    initials = "#{parts[1].strip[0]}#{parts[0].strip[0]}".upcase
  rescue
    return "?" unless sortable_name && !sortable_name.empty?
    return sortable_name[0..1].upcase if sortable_name.length > 1
    sortable_name[0]
  end

end
