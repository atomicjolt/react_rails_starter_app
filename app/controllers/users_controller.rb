class UsersController < ApplicationController
  before_filter :authenticate_user!
  load_and_authorize_resource

  after_action :verify_authorized, except: [:show]

  def index
  end

  def show
  end

  def update
    if @user.update_attributes(secure_params)
      redirect_to users_path, :notice => "User updated."
    else
      redirect_to users_path, :alert => "Unable to update user."
    end
  end

  def destroy
    user.destroy
    redirect_to users_path, :notice => "User deleted."
  end

  private

    def create_params
      params.require(:user).permit(:role)
    end

    def update_params
      params.require(:user).permit(:role)
    end

end
