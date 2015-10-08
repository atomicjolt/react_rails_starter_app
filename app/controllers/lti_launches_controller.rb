class LtiLaunchesController < ApplicationController

  layout "bare"
  
  skip_before_filter :verify_authenticity_token
  before_filter :do_lti

  def index
  end

end
