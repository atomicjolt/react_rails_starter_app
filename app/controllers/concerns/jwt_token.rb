module JwtToken
  extend ActiveSupport::Concern

  class InvalidTokenError < StandardError; end

  def validate_token
    begin
      authorization = request.headers['Authorization']
      raise InvalidTokenError if authorization.nil?

      token = request.headers['Authorization'].split(' ').last
      decoded_token = AuthToken.valid?(token)

      raise InvalidTokenError if Rails.application.secrets.auth0_client_id != decoded_token[0]["aud"]

      @user = User.find(decoded_token[0]['user_id'])
      sign_in(@user, :event => :authentication)
    rescue JWT::DecodeError, InvalidTokenError
      render :json => { :error => "Unauthorized: Invalid token." }, status: :unauthorized
    end
  end

end