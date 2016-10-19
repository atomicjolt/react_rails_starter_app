class CreateAdminService
  def self.create_admin
    user = User.find_or_create_by!(email: Rails.application.secrets.admin_email) do |user|
      user.password = Rails.application.secrets.admin_password
      user.password_confirmation = Rails.application.secrets.admin_password
      user.confirm
      user.admin = true
      user.save!
    end
  end
end
