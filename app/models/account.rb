class Account < ActiveRecord::Base
  
  include Lti::Methods

  validates :domain, uniqueness: true
  validates :code, uniqueness: true
  validates :code, presence: true
  validates :lti_secret, uniqueness: true

  attr_encrypted :canvas_token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt

  before_save :clean_domain

  has_many :users
  has_many :courses

  def clean_domain
    self.domain = "http://#{self.domain}" unless self.domain.include?("http://") || self.domain.include?("https://")
    self.domain = URI.parse(self.domain).host
  end

  def self.main
    Account.find_by(code: Rails.application.secrets.application_code)
  end

  def basic_lti_xml
    config = Lti::Canvas.basic_config(self.code)
    Lti::Canvas.config_xml(config)
  end

  def course_nav_lti_xml(visibility='admins')
    config = Lti::Canvas.course_navigation_config(self.code, visibility)
    Lti::Canvas.config_xml(config)
  end

  def canvas_api
    self.canvas_token ? Canvas.new(self.canvas_uri, self.canvas_token) : nil
  end

  def sync_courses
    self.canvas_api.all_courses(self.id).each do |canvas_course|
      course = Course.find_by(lms_course_id: canvas_course['id'])
      if course
        unless canvas_course['name'] == course.name && canvas_course['sis_course_id'] == course.sis_course_id
          course.update_attributes(name: canvas_course['name'], sis_course_id: canvas_course['sis_course_id'])
        end
      else
        Course.create!(
          lms_course_id: canvas_course['id'],
          account_id: self.id,
          sis_course_id: canvas_course['sis_course_id'],
          name: canvas_course['name'])
      end
    end
  end

end
