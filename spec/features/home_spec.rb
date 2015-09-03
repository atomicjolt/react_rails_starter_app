require 'rails_helper'
Capybara.default_driver = :selenium
Capybara.default_wait_time = 30
WebMock.allow_net_connect!
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

feature 'user opens the home page' do

  scenario 'user views the home page', js: true do
    visit "/"
  end
end