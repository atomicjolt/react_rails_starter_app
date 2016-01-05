class Api::CanvasProxyController < ApplicationController
  
  before_action :validate_token

  respond_to :json

  def proxy
    api = current_account.canvas_api
    result = api.proxy(params[:url], request.method, request.body)
    response.status = result.code
    
    allowed_headers = [ "content-type", "link", "p3p", "x-canvas-meta", "x-canvas-user-id", 
      "x-rate-limit-remaining", "x-request-context-id", "x-request-cost", 
      "x-request-processor", "x-robots-tag", "x-runtime", "x-session-id", 
      "x-ua-compatible", "x-xss-protection"]

    result.headers.each do |name, val|
      response.headers[name] = val if allowed_headers.include?(name)
    end

    render text: result.body
  end

end

