require 'vcr'
require 'rails_helper'

# these is the id of a specific course in the cassette
LMS_COURSE_ID      = 263

RSpec.describe Course, type: :model do
  before do
    @course = FactoryGirl.create(:course, lms_course_id: LMS_COURSE_ID)
    @course.users << FactoryGirl.create(:user)
  end

  it { should belong_to(:account) }

  describe "sync_sections" do
    def do_sync
      VCR.use_cassette("sync_sections", :match_requests_on => [:path]) do
        @course.sync_sections
      end
      @course.reload
    end

    it "should add sections that are not in the database" do
      expect{do_sync}.to change{@course.sections.count}.from(0).to(4)
    end
    it "should update the names of sections that have been changed in canvas" do
      do_sync
      section = @course.sections.first
      lms_section_id = section.lms_section_id
      name = section.name
      section.update_attribute(:name, "The Lost and Forgotten Section")
      do_sync
      expect(@course.sections.find_by(lms_section_id: lms_section_id).name).to eq(name)
    end
    it "should remove sections that are no longer in canvas" do
      do_sync
      @course.sections.create!(name: "some new section", lms_section_id: "some_new_id")
      expect{do_sync}.to change{@course.sections.count}.from(5).to(4)
    end
  end

end
