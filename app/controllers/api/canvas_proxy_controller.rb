class Api::CanvasProxyController < ApplicationController
  
  before_action :validate_token

  respond_to :json

  def proxy
    api = current_account.canvas_api
    result = api.proxy(params[:url], request.method, request.body)
    response.body = result.body
    response.status = result.code
    result.headers.each do |name, val|
      response.headers[name] = val
    end
    response.close
  end

end

