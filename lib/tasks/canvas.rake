namespace :canvas do

  desc "Sync students with Canvas"
  task :sync_students => [:environment] do |t, args|
    Course.all.each do  |course|
      course.sync_students
    end
  end

end
