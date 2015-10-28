# run with rails new testtmp -m ./canvas_starter_app/canvas_template.rb

require "fileutils"
require "byebug"

repo = "git@github.com:atomicjolt/canvas_starter_app.git"
working_dir = destination_root

###########################################################
# 
# Helper methods
# 
def git_repo_url
  @git_repo_url ||= ask_with_default("What is the git or bitbucket remote URL for this project?", :blue, "skip")
end

def git_repo_specified?
  git_repo_url != "skip" && !git_repo_url.strip.empty?
end

def gsub_file(path, regexp, *args, &block)
  content = File.read(path).gsub(regexp, *args, &block)
  File.open(path, 'wb') { |file| file.write(content) }
end

def ask_with_default(question, color, default)
  return default unless $stdin.tty?
  question = (question.split("?") << " [#{default}]?").join
  answer = ask(question, color)
  answer.to_s.strip.empty? ? default : answer
end

def app_dir
  destination_root.split('/').last
end

###########################################################
# 
# Gather information
# 
app_name = app_dir.titleize # ask("What is the application name?")
add_remote = true     # yes?("Add Canvas Starter App as upstream?")
git_repo_url
rails_port = ask_with_default("Port for Rails?", :blue, 3000)
assets_port = ask_with_default("Port for assets server?", :blue, 8000)


###########################################################
# 
# Clone and add remote
# 
FileUtils.rm_rf("#{working_dir}/.")               # Get rid of the rails generated code.
run "cd .. && git clone #{repo} #{working_dir}"   # Replace it with our repo.
git remote: "set-url origin #{git_repo_url}" if git_repo_specified?
git remote: "add upstream #{repo}" if add_remote


###########################################################
# 
# Database.yml
#
inside 'config' do 
  copy_file "database.example.yml", "database.yml"
end


###########################################################
# 
# secrets.yml
# 
inside 'config' do
  copy_file "secrets.example.yml", "secrets.yml"
  
  line = "<Run rake secret to get a value to put here>"
  gsub_file("secrets.yml", /(#{Regexp.escape(line)})/mi) do |match|
    app_name
  end

end


###########################################################
# 
# .env
# 
create_file '.env' do <<-EOF
APP_SUBDOMAIN=#{app_name.parameterize}
APP_URL=ngrok.io
APP_PORT=#{rails_port}
ASSETS_SUBDOMAIN=#{app_name.parameterize}assets
ASSETS_PORT=#{assets_port}
ASSETS_URL=https://#{app_name.parameterize}assets.ngrok.io
APP_DEFAULT_CANVAS_URL=https://atomicjolt.instructure.com
EOF
end


###########################################################
# 
# Modify application name
#
modify_files = Dir.glob("**/*").reject do |f| 
  File.directory?(f) || !["rb", "js", "yml", "erb", "json", "md", "jsx"].include?(File.extname(f)) 
end
modify_files << ".env"
modify_files << "Gemfile"
modify_files << ".ruby-gemset"


modify_files.each do |f|
  
  puts "processing: #{f}"

  line = "canvas_starter_app"
  gsub_file(f, /(#{Regexp.escape(line)})/mi) do |match|
    app_name.parameterize.underscore
  end

  line = "canvasstarterapp"
  gsub_file(f, /(#{Regexp.escape(line)})/mi) do |match|
    app_name.parameterize
  end
  
  line = "CanvasStarterApp"
  gsub_file(f, /(#{Regexp.escape(line)})/mi) do |match|
    app_name.classify
  end

  line = "Canvas Starter App"
  gsub_file(f, /(#{Regexp.escape(line)})/mi) do |match|
    app_name
  end

end


###########################################################
# 
# Initialize the database
# 
rake("db:create")
rake("db:schema:load")
rake("db:seed")


###########################################################
# 
# Commit changes to git
# 
after_bundle do
  git add: '.'
  git commit: "-a -m 'Initial commit'"
end


###########################################################
# 
# Notes
# 

puts "***********************************************"
puts "Notes:"

puts "Assuming you have ngrok installed and want to use foreman start the application by running:"
puts "foreman start -f Procfile.dev"

if !origin_repo
  puts "To set your git remote repository run:"
  puts 'git remote set-url origin [URL_OF_YOUR_GIT_REPOSITORY]'
end

puts 'If you need API access you will need to request a Canvas ID and Secret from Instructure - https://docs.google.com/forms/d/1C5vOpWHAAl-cltj2944-NM0w16AiCvKQFJae3euwwM8/viewform .'



