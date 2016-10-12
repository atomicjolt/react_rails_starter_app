class Api::JwtsController < ApplicationController

  include JwtToken

  before_action :validate_token

  respond_to :json

  def show
    token = AuthToken.issue_token({ user_id: current_user.id })
    respond_to do |format|
      format.json { render json: { jwt: token } }
    end
  end

end


