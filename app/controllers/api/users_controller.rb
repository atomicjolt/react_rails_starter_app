class Api::UsersController < ApplicationController
  
  before_action :validate_token
  
  respond_to :json

  before_filter :setup_will_paginate, only: [:index]

  load_and_authorize_resource :account
  load_and_authorize_resource :user, through: :account

  def index
    respond_to do |format|
      format.json { render json: @account.users.paginate(page: @page, per_page: @per_page) }
    end
  end

  def create
    @user = @account.users.build(create_params)
    if @user.save
      respond_to do |format|
        format.json { render json: @user }
      end
    else
     respond_to do |format|
        format.json { render json: @user.errors, status: :unprocessable_entity}
      end
    end
  end

  def update
    if @user.update_attributes(update_params)
      respond_to do |format|
        format.json { render json: @user }
      end
    else
     respond_to do |format|
        format.json { render json: @user.errors, status: :unprocessable_entity}
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.json { render json: @user }
    end
  end
  
  private

    def create_params
      params.require(:user).permit(:name, :email, :role, :password, :password_confirmation)
    end

    def update_params
      params.require(:user).permit(:name, :email, :role)
    end

end
