class LtiLaunchesController < ApplicationController

  include Concerns::LtiSupport

  layout "client"

  skip_before_filter :verify_authenticity_token
  before_action :do_lti

  def index
  end

end
