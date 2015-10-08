class Api::AccountsController < ApplicationController

  before_action :validate_token

  load_and_authorize_resource

  def index
    respond_to do |format|
      format.json { render json: @accounts }
    end
  end


  def create
    if @account.save
      respond_to do |format|
        format.json { render json: @account }
      end
    else
     respond_to do |format|
        format.json { render json: @account.errors, status: :unprocessable_entity}
      end
    end
  end

  def update
    if @account.update_attributes(update_params)
      respond_to do |format|
        format.json { render json: @account }
      end
    else
     respond_to do |format|
        format.json { render json: @account.errors, status: :unprocessable_entity}
      end
    end
  end

  private

    def create_params
      params.require(:account).permit(:name, :domain, :canvas_uri, :code)
    end

    def update_params
      params.require(:account).permit(:name, :domain, :canvas_uri, :code)
    end

end
