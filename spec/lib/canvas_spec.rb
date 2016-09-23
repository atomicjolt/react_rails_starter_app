require 'rails_helper'

describe Canvas do
  before do
    @course_id = 11
    @token = 'test'
    @base_uri = 'http://www.example.com'
    @canvas_authentication = FactoryGirl.create(:authentication, :provider => 'canvas', :token => @token, :provider_url => @base_uri)
    @api = Canvas.new(@canvas_authentication.provider_url, @canvas_authentication.token)
    @external_tool_id = 1
    lti_options = {
      launch_url: 'http://www.example.com/launch'
    }
    @tool_config = {
      "config_type" => "by_xml",
      "config_xml" => Lti::Canvas.config_xml(lti_options)
    }
  end

  describe "api_put_request" do
    it "calls the given url with a PUT request" do
      payload = {}
      result = http_party_put_response
      expect(HTTParty).to receive(:put).with("#{@base_uri}/api/v1/courses", :headers => @api.headers, :body => payload).and_return(result)
      @api.api_put_request("courses", payload)
    end
  end

  describe "api_post_request" do
    it "calls the given url with a POST request" do
      payload = {}
      result = http_party_post_response
      expect(HTTParty).to receive(:post).with("#{@base_uri}/api/v1/courses", :headers => @api.headers, :body => payload).and_return(result)
      @api.api_post_request("courses", payload)
    end
  end

  describe "api_get_request" do
    it "calls the given url with a GET request" do
      result = http_party_get_response
      expect(HTTParty).to receive(:get).with("#{@base_uri}/api/v1/courses", :headers => @api.headers).and_return(result)
      @api.api_get_request("courses")
    end
  end

  describe "api_get_all_request" do
    it "should return all results from the api call" do
      results = @api.api_get_all_request("#{@base_uri}/api/v1/courses")
      expect(results.length).to eq(16)
      expect(results.first['course_code']).to eq("Biology")
      expect(results[8]['course_code']).to eq("Biology")
    end
  end

  describe "api_get_blocks_request" do
    it "yields results from the canvas api to the block" do
      times_called = 0
      @api.api_get_blocks_request("#{@base_uri}/api/v1/courses") do |result|
        times_called += 1
        expect(result.first['course_code']).to eq("Biology")
      end
      expect(times_called).to eq(2)
    end
  end

  describe "get_next_url" do
    it "Returns the rel='next' url" do
      link = %Q{<https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueA>; rel="current",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueB>; rel="next",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueC>; rel="first",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueD>; rel="last"}
      url = @api.get_next_url(link)
      expect(url).to eq('https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueB')
    end
    it "removes whitespace from the rel='next' url" do
      link = %Q{<https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueA>; rel="current",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueB>; rel="next",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueC>; rel="first",
                <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueD>; rel="last"}
      url = @api.get_next_url(link)
      expect(url).to eq('https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueB')
    end
    it "Returns nil when rel='next' is not available" do
      link = %Q{<https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueA>; rel="current",
          <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueC>; rel="first",
          <https://example.instructure.com/api/v1/courses/45/discussion_topics.json?opaqueD>; rel="last"}
      url = @api.get_next_url(link)
      expect(url).to eq(nil)
    end
    it "handles nil values" do
      url = @api.get_next_url(nil)
      expect(url).to eq(nil)
    end
  end

  describe "proxy" do
    it "uses type to call the canvas api to get courses" do
      result = @api.proxy("LIST_YOUR_COURSES", {})
      expect(result.count).to eq(8)
    end
    it "uses type to call the canvas api to get a course" do
      result = @api.proxy("GET_SINGLE_COURSE_COURSES", {id: 244})
      expect(result["course_code"]).to eq("Biology")
    end
    it "raises an exception if required parameters aren't included" do
      expect { @api.proxy("GET_SINGLE_COURSE_COURSES") }.to raise_exception(ArgumentError)
    end
    it "makes multiple api calls to load all courses" do
      results = @api.proxy("LIST_YOUR_COURSES", {}, nil, true)
      expect(results.count).to eq(16)
    end
    it "calls the provided block for each page of data returned" do
      block_calls = 0
      @api.proxy("LIST_YOUR_COURSES", {}) do |results|
        expect(results.count).to eq(8)
        expect(results[0]["course_code"]).to eq("Biology")
        block_calls+=1
      end
      expect(block_calls).to eq(2)
    end
  end

  describe "check_result" do
    before do
      @url = "http://www.example.com"
    end
    it "should raise an UnauthorizedException if 401 not authorized" do
      result = http_party_get_response(401, 'Unauthorized')
      expect { @api.check_result(result, @url) }.to raise_exception(Canvas::UnauthorizedException)
    end
    it "should raise an NotFoundException if 404 not found" do
      result = http_party_get_response(404, 'Not Found')
      expect { @api.check_result(result, @url) }.to raise_exception(Canvas::NotFoundException)
    end
    it "should raise an InvalidRequestException if canvas call fails" do
      result = http_party_get_response(500, 'Internal Server Error', "{errors:'Something terrible'}")
      expect { @api.check_result(result, @url) }.to raise_exception(Canvas::InvalidRequestException)
    end
    it "should return the result for a 200" do
      result = http_party_get_response
      expect(@api.check_result(result, @url)).to eq(result)
    end
    it "should return the result for a 201" do
      result = http_party_get_response(201)
      expect(@api.check_result(result, @url)).to eq(result)
    end
  end

  it "only allows query params in the query" do
    id = 5
    course_id = 6
    params = {id: id, course_id: course_id, controller: "foo", account_id: 1, all_dates: true, other_param: "foobar"}
    url = Canvas.canvas_url("GET_SINGLE_ASSIGNMENT", params)
    expect(url).to eq("courses/#{course_id}/assignments/#{id}?all_dates=true")
  end

  it "Doesn't include post parameters in the query" do
    course_id = 6
    params = {course_id: course_id, assignment: { name: "The name", position: 2, submission_types: "online_quiz"}}
    url = Canvas.canvas_url("CREATE_ASSIGNMENT", params)
    expect(url).to eq("courses/#{course_id}/assignments")
  end

  context "Common API requests using proxy" do

    describe "courses" do
      it "should retrieve courses from the Canvas API" do
        courses = @api.proxy("LIST_YOUR_COURSES", {}, nil, true)
        expect(courses.length).to be > 0
      end
    end

    describe "is account admin" do
      it "Returns account information when the user is an account admin" do
        result = @api.proxy("GET_SINGLE_ACCOUNT", {id: "self"}, nil, true)
        expect(result[0]['id']).to eq(43460000000000001)
      end
      it "Returns false when the user is not an account admin" do
        stub_request(:get, %r|http[s]*://www.example.com/api/v1/accounts/self|).
          to_return(
            :status => 401,
            :body => "",
            :headers => canvas_headers)
        expect { @api.proxy("GET_SINGLE_ACCOUNT", {id: "self"}, nil, true) }.to raise_error
      end
    end

    describe "all_accounts" do
      before do
        @accounts = @api.all_accounts
      end
      it "loads all accounts including subaccounts" do
        expect(@accounts.length).to eq(3)
      end
      it "loads top level account" do
        account = @accounts.find{|a| a['name'] == 'Atomic Jolt'}
        expect(account).to be_present
      end
      it "loads sub-accounts" do
        account = @accounts.find{|a| a['name'] == 'Canvas Demo Courses'}
        expect(account).to be_present
      end
    end

    describe "accounts" do
      it "should retrieve accounts from the Canvas API" do
        accounts = @api.proxy("LIST_ACCOUNTS", {}, nil, true)
        expect(accounts.length).to be > 0
      end
    end

    describe "sub_accounts" do
      it "should retrieve sub accounts from the Canvas API for the given account" do
        accounts = @api.proxy("GET_SUB_ACCOUNTS_OF_ACCOUNT", {account_id: "43460000000000001"})
        expect(accounts.length).to be > 0
        manual = accounts.find{|a| a['id'] == 43460000000000002}
        expect(manual).to be_present
        demo = accounts.find{|a| a['id'] == 43460000000000017}
        expect(demo).to be_present
      end
    end

    describe "get course lti tools" do
      it "should find installed LTI tools for the given course" do
        tools = @api.proxy("LIST_EXTERNAL_TOOLS_COURSES", {course_id: @course_id})
        expect(tools.first['consumer_key']).to eq('fake')
      end
    end

    describe "update course lti tool" do
      it "should update installed LTI tools for the given course" do
        tool = @api.proxy("EDIT_EXTERNAL_TOOL_COURSES", {course_id: @course_id, external_tool_id: @external_tool_id, tool_config: @tool_config})
        expect(tool['consumer_key']).to eq('fake')
      end
    end

    describe "create course lti tool" do
      it "should create a new LTI tool install for the given course" do
        tool = @api.proxy("CREATE_EXTERNAL_TOOL_COURSES", {
          course_id: @course_id,
          external_tool_id: @external_tool_id,
          name: "test tool",
          privacy_level: "public",
          consumer_key: "thekey",
          shared_secret: "thisisasecret"
        })
        expect(tool['consumer_key']).to eq('fake')
      end
    end

    describe "canvas_url" do
      it "generates a canvas url to get accounts" do
        url = Canvas.canvas_url("LIST_ACCOUNTS", {})
        expect(url).to eq("accounts")
      end
      it "generates a canvas url with params to get accounts" do
        params = {
          action: "test",
          controller: "test",
          per_page: 100,
          "include": ["lti_guid", "registration_settings"]
        }
        url = Canvas.canvas_url("LIST_ACCOUNTS", params)
        expect(url).to eq("accounts?include%5B%5D=lti_guid&include%5B%5D=registration_settings&per_page=100")
      end
      it "generates a canvas url to get courses" do
        params = {account_id: 1}
        url = Canvas.canvas_url("LIST_ACTIVE_COURSES_IN_ACCOUNT", params)
        expect(url).to eq("accounts/1/courses")
      end
      it "generates a canvas url to get courses with extra values in params" do
        params = {with_enrollments: true, controller: "foo", account_id: 1}
        url = Canvas.canvas_url("LIST_ACTIVE_COURSES_IN_ACCOUNT", params)
        expect(url).to eq("accounts/1/courses?with_enrollments=true")
      end

    end

  end

end