class Canvas

  IGNORE_PARAMS = :controller, :action, :format, :type

  def initialize(canvas_uri, canvas_api_key, refresh_token_options=nil)
    @per_page = 100
    @canvas_uri = UrlHelper.scheme_host(canvas_uri)
    @canvas_api_key = canvas_api_key
    @refresh_token_options = refresh_token_options
  end

  def headers(additional_headers = {})
    {
      "Authorization" => "Bearer #{@canvas_api_key}",
      "User-Agent" => "CanvasAPI Ruby"
    }.merge(additional_headers)
  end

  def full_url(api_url, use_api_prefix=true)
    if api_url[0...4] == 'http'
      api_url
    else
      if use_api_prefix
        "#{@canvas_uri}/api/v1/#{api_url}"
      else
        "#{@canvas_uri}/#{api_url}"
      end
    end
  end

  def api_put_request(api_url, payload, additional_headers = {})
    @method = 'PUT'
    @api_url = api_url
    @payload = payload
    url = full_url(api_url)
    check_result(HTTParty.put(url, headers: headers(additional_headers), body: payload), url)
  end

  def api_post_request(api_url, payload, additional_headers = {})
    unless @refreshing_token
      @method = 'POST'
      @api_url = api_url
      @payload = payload
    end
    url = full_url(api_url)
    result = HTTParty.post(url, headers: headers(additional_headers), body: payload)
    check_result(result, url)
  end

  def api_get_request(api_url, additional_headers = {})
    @method = 'GET'
    @api_url = api_url
    url = full_url(api_url)
    check_result(HTTParty.get(url, headers: headers(additional_headers)), url)
  end

  def api_get_all_request(api_url, additional_headers = {})
    connector = api_url.include?('?') ? '&' : '?'
    next_url = "#{api_url}#{connector}per_page=#{@per_page}"
    results = []
    while next_url do
      result = api_get_request(next_url, additional_headers)
      result.each{ |r| results << r }
      next_url = get_next_url(result.headers['link'])
    end
    results
  end

  def api_get_blocks_request(api_url, additional_headers = {})
    connector = api_url.include?('?') ? '&' : '?'
    next_url = "#{api_url}#{connector}per_page=#{@per_page}"
    while next_url do
      result = api_get_request(next_url, additional_headers)
      yield result
      next_url = get_next_url(result.headers['link'])
    end
  end

  def refresh_token
    @refreshing_token = true
    payload = {
      grant_type: 'refresh_token',
      client_id: @refresh_token_options[:client_id],
      client_secret: @refresh_token_options[:client_secret],
      refresh_token: @refresh_token_options[:refresh_token],
      redirect_uri: @refresh_token_options[:redirect_uri]
    }
    url = full_url("login/oauth2/token", false)
    result = HTTParty.post(url, headers: headers, body: payload)
    check_result(result, url)
    @refreshing_token = false
    result
  end

  def retry_request
    @retrying = true
    case @method
      when 'GET'
        result = api_get_request(@api_url)
      when 'POST'
        result = api_post_request(@api_url, @payload)
      when 'PUT'
        result = api_put_request(@api_url, @payload)
      else
        result = nil
    end
    @retrying = false
    result
  end

  def refresh_token_and_retry
    result = refresh_token
    if result
      @canvas_api_key = result['access_token']
      @refresh_token_options[:auth].update_attribute(:token, @canvas_api_key)
      retry_request
    end
  end

  def check_result(result, url=nil)
    if result.response.code == '401'
      # TODO need to check header for 'authenticate' flag
      return refresh_token_and_retry unless !@refresh_token_options || @refreshing_token || @retrying
      raise Canvas::UnauthorizedException, "#{result['errors']} Url: #{url}, API Key: #{@canvas_api_key}"
    elsif result.response.code == '404'
      raise Canvas::NotFoundException, "#{result['errors']} Url: #{url}, API Key: #{@canvas_api_key}"
    elsif !['200', '201'].include?(result.response.code)
      raise Canvas::InvalidRequestException, "Status: #{result.response.code} Error: #{result['errors']} Url: #{url}, API Key: #{@canvas_api_key}"
    end
    result
  end

  def get_next_url(link)
    return nil if link.blank?
    if url = link.split(',').find{|l| l.split(";")[1].strip == 'rel="next"' }
      url.split(';')[0].gsub(/[\<\>\s]/, "")
    end
  end

  def proxy(type, params, payload = nil, get_all = false)

    additional_headers = {
      "Content-Type" => "application/json"
    }

    method = CanvasUrls.urls[type][:method]
    url = Canvas.canvas_url(type, params, payload)

    case method
    when 'GET'
      if block_given?
        api_get_blocks_request(url, additional_headers) do |result|
          yield result
        end
      elsif get_all
        api_get_all_request(url, additional_headers)
      else
        api_get_request(url, additional_headers)
      end
    when 'POST'
      api_post_request(url, payload, additional_headers)
    when 'PUT'
      api_put_request(url, payload, additional_headers)
    else
      raise "invalid method type"
    end

  end

  # Ignore required params for specific calls. For example, the external tool calls
  # have required params "name, privacy_level, consumer_key, shared_secret". However, those
  # params are not required if the call specifies config_type: "by_xml".
  def self.ignore_required(type)
    [
      "CREATE_EXTERNAL_TOOL_COURSES",
      "CREATE_EXTERNAL_TOOL_ACCOUNTS"
    ].include?(type)
  end

  def self.canvas_url(type, params, payload = nil)
    endpoint = CanvasUrls.urls[type]
    parameters = endpoint[:parameters]

    # Make sure all required parameters are present
    missing = []
    if !self.ignore_required(type)
      parameters.find_all{|p| p["required"]}.map{|p| p["name"]}.each do |p|
        if p.include?("[") && p.include?("]")
          parts = p.split('[')
          parent = parts[0].to_sym
          child = parts[1].gsub("]", "").to_sym
          missing << p unless (params[parent].present? && params[parent][child].present?) ||
                              (payload.present? && payload[parent].present? && payload[parent][child].present?)
        else
          missing << p unless params[p.to_sym].present? || payload[p.to_sym].present?
        end
      end
    end

    if missing.length > 0
      raise "Missing required parameter(s): #{missing.join(', ')}"
    end

    # Generate the uri. Only allow path parameters
    uri_proc = endpoint[:uri]
    path_parameters = parameters.find_all{|p| p["paramType"] == "path"}.map{|p| p["name"].to_sym}
    args = params.slice(*path_parameters).symbolize_keys
    uri = args.blank? ? uri_proc.call : uri_proc.call(**args)

    # Generate the query string
    query_parameters = parameters.find_all{|p| p["paramType"] == "query"}.map{|p| p["name"].to_sym}

    # always allow paging parameters
    query_parameters << :per_page
    query_parameters << :page

    allowed_params = params.slice(*query_parameters)

    if allowed_params.present?
      "#{uri}?#{allowed_params.to_query}"
    else
      uri
    end

  end


  #
  # Helper methods
  #

  # Get all accounts including sub accounts
  def all_accounts
    all = []
    self.proxy("LIST_ACCOUNTS", {}, nil, true).each do |account|
      all << account
      sub_accounts = self.proxy("GET_SUB_ACCOUNTS_OF_ACCOUNT", {account_id: account['id']}, nil, true)
      all = all.concat(sub_accounts)
    end
    all
  end


  #
  # Exceptions
  #

  class UnauthorizedException < Exception
  end

  class InvalidRequestException < Exception
  end

  class NotFoundException < Exception
  end

end
