class CreateAdminService
  def call
    user = User.find_or_initialize_by(email: Rails.application.secrets.admin_email)
    user.password = Rails.application.secrets.admin_password
    user.password_confirmation = Rails.application.secrets.admin_password
    user.confirm unless user.confirmed?
    user.add_to_role("administrator")
    user.save!
    user
  end
end
