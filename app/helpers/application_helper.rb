module ApplicationHelper

  def application_base_url
    File.join(request.base_url, "/")
  end

  def jwt_token
    return unless signed_in?
    AuthToken.issue_token({ user_id: current_user.id })
  end

end
