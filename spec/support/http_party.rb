def http_party_get_response(code = 200, code_response = 'OK', body = '{"foo" : "bar_get"}', headers = {})
  request_object = HTTParty::Request.new Net::HTTP::Get, '/'
  http_party_response(code, code_response, body, request_object, headers)
end

def http_party_delete_response(code = 200, code_response = 'OK', body = '{"foo" : "bar_get"}', headers = {})
  request_object = HTTParty::Request.new Net::HTTP::Delete, '/'
  http_party_response(code, code_response, body, request_object, headers)
end

def http_party_post_response(code = 200, code_response = 'OK', body = '{"foo" : "bar_post"}', headers = {})
  request_object = HTTParty::Request.new Net::HTTP::Post, '/'
  http_party_response(code, code_response, body, request_object, headers)
end

def http_party_put_response(code = 200, code_response = 'OK', body = '{"foo" : "bar_put"}', headers = {})
  request_object = HTTParty::Request.new Net::HTTP::Put, '/'
  http_party_response(code, code_response, body, request_object, headers)
end

def http_party_response(code, code_response, body, request_object, headers)
  last_modified = Date.new(2010, 1, 15).to_s
  content_length = '1024'
  response_object = Net::HTTPOK.new('1.1', code.to_s, code_response)
  allow(response_object).to receive_messages(body: body)
  response_object['last-modified'] = last_modified
  response_object['content-length'] = content_length
  headers.each do |key, val|
    response_object[key] = val
  end
  parsed_response = lambda { body.present? ? JSON.parse(body) : {"foo" => "bar"} }
  HTTParty::Response.new(request_object, response_object, parsed_response)
end