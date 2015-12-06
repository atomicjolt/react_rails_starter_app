class Section < ActiveRecord::Base
  belongs_to :course
  belongs_to :chart

  has_many :notes

  has_many :user_courses
  alias_attribute :seatings, :user_courses
  has_many :students, -> {where('user_courses.role_id = ?', UserCourse::STUDENT)}, :through => :user_courses, :foreign_key => :user_id, :class_name => "User", :source => :user

  def sync_students
    # puts "Section: #{self.name}"
    api = course.canvas_api
    return unless api

    course = self.course

    old_students = Hash[self.students.collect { |student| [student.lms_user_id, student] }]
    # puts "Users in db: #{old_students.count}"

    canvas_students = api.section_students_and_observers(self.lms_section_id, "avatar_url")
    # puts "Users in canvas: #{canvas_students.count}"

    num_added_students = 0

    canvas_students.each do |canvas_student|
      student = canvas_student['user']
      if old_students.has_key?(student['id'].to_s)

        #update their attributes
        old_student = User.find_by(lms_user_id: student['id'])
        old_student.update_attributes(name: student['name'],
          sortable_name: student['sortable_name'],
          initials: User.convert_name_to_initials(student['sortable_name']),
          avatar_url: student['avatar_url'],
          sis_user_id: student['sis_user_id'])

        # remove them from the list, leaving only students who we didn't find
        old_students.delete(student['id'].to_s)
      else
        # we have the student in the db, but they are not enrolled in this course
        if student_in_other_course = User.where(lms_user_id: student['id']).first
          new_student_id = student_in_other_course.id
        else
          new_student = User.new(account_id: course.account_id,
            password: SecureRandom.hex,
            email: "#{SecureRandom.hex}@#{SecureRandom.hex}.com",
            lms_user_id: student['id'], name: student['name'],
            sortable_name: student['sortable_name'],
            initials: User.convert_name_to_initials(student['sortable_name']),
            avatar_url: student['avatar_url'],
            sis_user_id: student['sis_user_id'])
          new_student.skip_confirmation!
          new_student.save
          new_student_id = new_student.id
        end
        # puts "Adding student: #{student['name']}"
        num_added_students += 1
        UserCourse.create!(user_id: new_student_id, section_id: self.id)
      end
    end

    # remove seatings for students that are no longer enrolled
    old_students.each do |k, student|
      "Removing student: #{student.name}"
      self.seatings.where(user_id: student.id).destroy_all
    end
    # puts "Added #{num_added_students} students"
    # puts "Deleted #{old_students.count} students"
  end

  def reset_seating_positions
    self.seatings.update_all(left: 0, top: 0)
  end

  def as_json
    {
      id: id,
      canvas_section_id: lms_section_id,
      name: name
    }  
  end

end
