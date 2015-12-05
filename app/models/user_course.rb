class UserCourse < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  belongs_to :section

  INSTRUCTOR  = 1
  STUDENT     = 2

  def as_json(options = nil)
    {
      id: id, student_id: user_id, section_id: section_id, left: left,
      top: top, name: user.name, avatar_url: user.avatar_url,
      name_pronunciation_url: user.name_pronunciation_url,
      initials: user.initials, recent_employer: user.recent_employer
    }
  end

end
