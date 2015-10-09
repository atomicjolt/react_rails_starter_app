module ApplicationHelper

  def canvas_url
    session[:canvas_url] || Rails.application.secrets.canvas_url
  end

  def application_base_url
    File.join(request.base_url, "/")
  end

  def jwt_token
    return unless signed_in?
    AuthToken.issue_token({ user_id: current_user.id, canvas_roles: params["roles"] })
  end

  def course_id
    return params[:custom_canvas_course_id]
  end

  def user_id
    return params[:custom_canvas_user_id]
   end

  def client_images(*images)
    map = images.map { |image| %Q{#{image.gsub('/', '_').gsub('.', '_')} : "#{image_path(image)}"} }
    "{ #{map.join(", ")} }".html_safe
  end

end
