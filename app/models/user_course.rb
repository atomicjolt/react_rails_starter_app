class UserCourse < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  belongs_to :section

  INSTRUCTOR        = 1
  STUDENT           = 2
  CONTENT_DEVELOPER = 3
  MENTOR            = 4
  ADMIN             = 5
  TA                = 6

  def as_json(options = nil)
    {
      id: id, student_id: user_id, section_id: section_id, left: left,
      top: top, name: user.name, avatar_url: user.avatar_url,
      name_pronunciation_url: user.name_pronunciation_url,
      initials: user.initials, recent_employer: user.recent_employer
    }
  end

  def self.lti_role_id(provider)
    return UserCourse::INSTRUCTOR if provider.context_instructor?
    return UserCourse::TA if provider.context_ta?
    return UserCourse::MENTOR if provider.context_mentor?
    return UserCourse::ADMIN if provider.context_admin?
    return UserCourse::CONTENT_DEVELOPER if provider.context_content_developer?
    return UserCourse::STUDENT if provider.context_student?
  end

end
