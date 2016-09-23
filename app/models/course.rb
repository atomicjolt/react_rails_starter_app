class Course < ActiveRecord::Base
	belongs_to :account
  has_many :sections, :dependent => :destroy
  belongs_to :chart
  has_many :notes

  has_many :user_courses, dependent: :destroy
  has_many :users, :through => :user_courses
  alias_attribute :enrollments, :user_courses
  has_many :instructors, -> {where('user_courses.role_id = ?', UserCourse::INSTRUCTOR)}, :through => :user_courses, :foreign_key => :user_id, :class_name => "User", :source => :user
  has_many :students, -> {where('user_courses.role_id = ?', UserCourse::STUDENT)}, :through => :user_courses, :foreign_key => :user_id, :class_name => "User", :source => :user

  def self.for_lti_launch(user, lms_course_id, name, referer, role_id)
    lms_course_id ||= Course.lms_course_id_from_referer(referer)
    course = user.courses.find_by(lms_course_id: lms_course_id)
    unless course
      course = user.account.courses.find_by(lms_course_id: lms_course_id)
      unless course
        course = Course.create!(
          lms_course_id: lms_course_id,
          account_id: user.account_id,
          name: name)
      end
      UserCourse.create!(user_id: user.id, course_id: course.id, role_id: role_id)
      course.sync_students if role_id == UserCourse::INSTRUCTOR
    end
    course
  end

  def self.lms_course_id_from_referer(referer)
    /courses\/([0-9]+)/.match(referer.to_s)[1] rescue nil
  end

  def sync_students
    # puts "\n==============================="
    # puts "Syncing students for course: #{self.name}"
    self.sync_sections
    self.sections.each{|s| s.sync_students}
    self.sync_avatars
  end

  def sync_sections
    api = self.canvas_api
    return unless api

    canvas_sections = api.proxy("LIST_COURSE_SECTIONS", {
      course_id: self.lms_course_id
    }, nil, true)

    canvas_sections.each do |canvas_section|
      section = self.sections.find_by(lms_section_id: canvas_section['id'])
      if section
        section.update_attributes(name: canvas_section['name'])
      else
        self.sections.create!(name: canvas_section['name'],
          lms_section_id: canvas_section['id'])
      end
    end
    # delete old sections that no longer exist in the course
    lms_section_ids = canvas_sections.map{|s| s['id'].to_s}
    self.sections.where("lms_section_id NOT IN (?)", lms_section_ids).destroy_all
  end

  def sync_avatars
    api = self.canvas_api
    if api
      api.students_and_observers(self.lms_course_id, "avatar_url").each do |canvas_student|
        student = self.account.users.find_by(lms_user_id: canvas_student['id'])
        student.update_attribute(:avatar_url, canvas_student['avatar_url'])
      end
    end
  end

  def canvas_api
    u = self.users.find {|u| u.canvas_api != nil}
    u ? u.canvas_api : nil
  end

  def as_json(options = nil)
    {
      id: id,
      name: name,
      sections: sections
    }
  end

end
