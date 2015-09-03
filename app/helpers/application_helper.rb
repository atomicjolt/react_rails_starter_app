module ApplicationHelper

  def application_base_url
    File.join(request.base_url, "/")
  end

  def jwt_token
    return unless signed_in?
    AuthToken.issue_token({ user_id: current_user.id })
  end

  def client_images(*images)
    map = images.map { |image| %Q{#{image.gsub('/', '_').gsub('.', '_')} : "#{image_path(image)}"} }
    "{ #{map.join(", ")} }".html_safe
  end

end
