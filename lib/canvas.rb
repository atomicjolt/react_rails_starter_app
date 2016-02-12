class Canvas

  def initialize(canvas_uri, canvas_api_key, refresh_token_options=nil)
    @per_page = 100
    @canvas_uri = UrlHelper.scheme_host(canvas_uri)
    @canvas_api_key = canvas_api_key
    @refresh_token_options = refresh_token_options
  end

  def headers
    {
      "Authorization" => "Bearer #{@canvas_api_key}",
      "content_type" => "json",
      'User-Agent' => "CanvasAPI Ruby"
    }
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

  def api_put_request(api_url, payload)
    @method = 'PUT'
    @api_url = api_url
    @payload = payload
    url = full_url(api_url)
    check_result(HTTParty.put(url, :headers => headers, :body => payload), url)
  end

  def api_post_request(api_url, payload, use_api_prefix=true)
	unless @refreshing_token
      @method = 'POST'
      @api_url = api_url
      @payload = payload
    end
    url = full_url(api_url, use_api_prefix)
    result = HTTParty.post(url, :headers => headers, :body => payload)
    check_result(result, url)
  end

  def api_get_request(api_url)
    @method = 'GET'
    @api_url = api_url
    url = full_url(api_url)
    check_result(HTTParty.get(url, :headers => headers), url)
  end

  def refresh_token
    result = api_post_request("login/oauth2/token", {
      grant_type: 'refresh_token',
      client_id: @refresh_token_options[:client_id],
      client_secret: @refresh_token_options[:client_secret],
      refresh_token: @refresh_token_options[:refresh_token]
    }, false)
    if result
      @canvas_api_key = result['access_token']
      @refresh_token_options[:auth].update_attribute(:token, @canvas_api_key)
      repeat_request_once
    end
  end

  def repeat_request_once
    case @method
      when 'GET'
        api_get_request(@api_url)
      when 'POST'
        api_post_request(@api_url, @payload)
      when 'PUT'
        api_put_request(@api_url, @payload)
    end
  end

  def refresh_token_and_try_again
    if @refresh_token_options
      @refreshing_token = true
      refresh_token
    end
  end

  def check_result(result, url)
    if result.response.code == '401'
      unless @refreshing_token
        @refreshing_token = false
        return if refresh_token_and_try_again
      end
      raise Canvas::UnauthorizedException, result['errors']
    elsif result.response.code == '404'
      raise Canvas::NotFoundException, result['errors']
    elsif !['200', '201'].include?(result.response.code)
      raise Canvas::InvalidRequestException, "Status: #{result.response.code} Error: #{result['errors']} Url: #{url}"
    end
    result
  end

  def get_next_url(link)
    return nil if link.blank?
    if url = link.split(',').find{|l| l.split(";")[1].strip == 'rel="next"' }
      url.split(';')[0].gsub(/[\<\>\s]/, "")
    end
  end

  def make_paged_api_request(api_url)
    connector = api_url.include?('?') ? '&' : '?'
    next_url = "#{api_url}#{connector}per_page=#{@per_page}"
    results = []
    while next_url do
      result = api_get_request(next_url)
      result.each{ |r| results << r }
      next_url = get_next_url(result.headers['link'])
    end
    results
  end

  def page_requests(api_url)
    connector = api_url.include?('?') ? '&' : '?'
    next_url = "#{api_url}#{connector}per_page=#{@per_page}"
    while next_url do
      result = api_get_request(next_url)
      yield result
      next_url = get_next_url(result.headers['link'])
    end
  end

  # Proxy a request through to canvas. Add headers as needed.
  def proxy(url, method = 'GET', payload = nil, use_api_prefix=true)
    case method
    when 'GET'
      api_get_request(url)
    when 'POST'
      api_post_request(url, payload, use_api_prefix)
    when 'PUT'
      api_put_request(url, payload)
    else
      raise "invalid method type"
    end
  end

  def is_account_admin
    api_get_request("accounts/self") # If user can access this endpoint they are an account admin
    true
  rescue Canvas::UnauthorizedException => ex
    false
  end

  def all_accounts
    all = []
    self.accounts.each do |account|
      all << account
      all = all.concat(self.sub_accounts(account['id']))
    end
    all
  end

  def user_role(account_id, role_id)
    api_get_request("accounts/#{account_id}/roles/#{role_id}")
  end

  def accounts
    api_get_request("accounts")
  rescue Canvas::UnauthorizedException => ex
    api_get_request("course_accounts")
  end

  def account_users(account_id, per_page = 25)
    make_paged_api_request("accounts/#{account_id}/users?per_page=#{per_page}")
  end

  def sub_accounts(account_id)
    api_get_request("accounts/#{account_id}/sub_accounts")
  end

  def assignments(course_id)
    api_get_request("courses/#{course_id}/assignments")
  end

  def discussion_topics(course_id)
    api_get_request("courses/#{course_id}/discussion_topics")
  end

  def courses(user_id = nil)
    if user_id
      api_get_request("courses?as_user_id=#{user_id}")
    else
      api_get_request("courses")
    end
  end

#This is used to list sections in a particular course, given a course_id.
  def sections(course_id, *include_options)
    include_param = include_options.map{|option| "include[]=#{option}"}.join("&")
    api_get_request("courses/#{course_id}/sections?#{include_param}")
  end

  def course_groups(course_id)
    api_get_request("courses/#{course_id}/groups")
  end

  def group_memberships(group_id)
    api_get_request("groups/#{group_id}/memberships")
  end

  def recent_logins(course_id)
    api_get_request("courses/#{course_id}/recent_students")
  end
  
  def students(course_id, *include_options)
    include_param = include_options.map{|option| "&include[]=#{option}"}.join
    make_paged_api_request("courses/#{course_id}/users?enrollment_type=student#{include_param}")
  end

  def students_and_observers(course_id, *include_options)
    include_param = include_options.map{|option| "&include[]=#{option}"}.join
    make_paged_api_request("courses/#{course_id}/users?enrollment_type[]=student&enrollment_type[]=observer#{include_param}")
  end

  def section_students_and_observers(section_id, *include_options)
    include_param = include_options.map{|option| "&include[]=#{option}"}.join
    make_paged_api_request("sections/#{section_id}/enrollments?type[]=StudentEnrollment&type[]=ObserverEnrollment")
  end

  def tas(course_id)
    make_paged_api_request("courses/#{course_id}/users?enrollment_type=ta")
  end

  def course_info(course_id)
    api_get_request("courses/#{course_id}")
  end

  def enrollments(course_id)
    make_paged_api_request("courses/#{course_id}/enrollments")
  end

  def user_enrollments(user_id)
    make_paged_api_request("users/#{user_id}/enrollments")
  end

  def all_courses(account_id, options = {})
    make_paged_api_request("accounts/#{account_id}/courses?#{options.to_param}")
  end

  def course_participation(course_id, student_id)
    api_get_request("courses/#{course_id}/analytics/users/#{student_id}/activity")
  end

  def quiz_submissions(course_id, quiz_id)
    api_get_request("courses/#{course_id}/quizzes/#{quiz_id}/submissions")
  end

  def quizzes(course_id)
    api_get_request("courses/#{course_id}/quizzes")
  end

  def assignment_submissions(course_id)
    api_get_request("courses/#{course_id}/students/submissions?student_ids[]=all")
  end

  def student_assignment_data(course_id, student_id)
    api_get_request("courses/#{course_id}/analytics/users/#{student_id}/assignments")
  end

  def course_assignment_data(course_id)
    api_get_request("courses/#{course_id}/analytics/assignments")
  end

  def get_user(user_id)
    api_get_request("users/#{user_id}")
  end

  def get_user_custom_data(user_id, namespace, scope=nil)
    api_get_request("users/#{user_id}/custom_data#{scope}?ns=#{namespace}")
  end

  def get_user_enrollments(user_id)
    api_get_request("users/#{user_id}/enrollments")
  end

  def get_single_role_info(account_id, id)
    api_get_request("accounts/#{account_id}/roles/#{role_id}")
  end

  def get_profile(user_id)
    api_get_request("users/self/profile?as_user_id=#{user_id}")
  end

  def user_activity(user_id)
    api_get_request("users/activity_stream?as_user_id=#{user_id}")
  end

  def create_conversation(recipients, subject, body)
    api_post_request("conversations", {
      recipients: recipients,
      subject: subject,
      body: body,
      scope: 'unread'
    })
  end

  def get_conversation(conversation_id)
    api_get_request("conversations/#{conversation_id}")
  end

  def add_message(conversation_id, recipients, body)
    api_post_request("conversations/#{conversation_id}/add_message", {
      recipients: recipients,
      body: body,
      scope: 'unread'
    })
  end

  def get_course_lti_tools(course_id)
    api_get_request("courses/#{course_id}/external_tools")
  end

  def update_course_lti_tool(course_id, external_tool_id, tool_config)
    api_put_request("courses/#{course_id}/external_tools/#{external_tool_id}", tool_config)
  end

  def create_course_lti_tool(course_id, tool_config)
    api_post_request("courses/#{course_id}/external_tools", tool_config)
  end

  def get_account_lti_tools(account_id)
    api_get_request("accounts/#{account_id}/external_tools")
  end

  def update_account_lti_tool(account_id, external_tool_id, tool_config)
    api_put_request("accounts/#{account_id}/external_tools/#{external_tool_id}", tool_config)
  end

  def create_account_lti_tool(account_id, tool_config)
    api_post_request("accounts/#{account_id}/external_tools", tool_config)
  end

  # Exceptions

  class UnauthorizedException < Exception
  end

  class InvalidRequestException < Exception
  end

  class NotFoundException < Exception
  end

  def self.canvas_url(type, params = {})
    proc = self.canvas_urls[type]
    args = params.slice(*proc.parameters[0]).symbolize_keys
    args.blank? ? proc.call : proc.call(**args)
  end

  def self.canvas_urls
    {  
      #ADMINS
      "ACCOUNT_ADMINS"                         => ->(account_id:) { "accounts/#{account_id}/admins" },
      "REMOVE_ADMINS"                          => ->(account_id:, user_id:) { "accounts/#{account_id}/admins/#{user_id}" },

      # ACCOUNTS
      "ACCOUNTS"                               => ->() { "accounts" },
      "ACCOUNT"                                => ->(account_id:) { "accounts/#{account_id}" },
      "SUB_ACCOUNTS"                           => ->(account_id:) { "accounts/#{account_id}/sub_accounts" },
      "COURSES"                                => ->(account_id:) { "accounts/#{account_id}/courses" },
      "UPDATE_ACCOUNT"                         => ->(account_id:) { "accounts/#{account_id}" },
      "DELETE_ACCOUNT"                         => ->(account_id:, user_id:) { "accounts/#{account_id}/user/#{user_id}" },
      "CREATE_SUB_ACCOUNT"                     => ->(account_id:) { "accounts/#{account_id}/sub_accounts" },
      "COURSE_ACCOUNTS"                        => ->() { "course/accounts" },
      
      #ANALYTICS
      "ACCOUNT_TERM_ANALYTICS"                 => ->(account_id:, term_id:) { "accounts/#{account_id}/analytics/terms/#{term_id}/activity" },
      "ACCOUNT_CURRENT_ANALYTICS"              => ->(account_id:) { "accounts/#{account_id}/analytics/current/activity" },
      "ACCOUNT_COMPLETED_ANALYTICS"            => ->(account_id:) { "accounts/#{account_id}/analytics/completed/activity" },
      
      #GRADES
      "ACCOUNT_TERM_ANALYTICS_GRADES"          => ->(account_id:, term_id:) { "accounts/#{account_id}/analytics/terms/#{term_id}/grades" },
      "ACCOUNT_CURRENT_ANALYTICS_GRADES"       => ->(account_id:) { "accounts/#{account_id}/analytics/current/grades" },
      "ACCOUNT_COMPLETED_ANALYTICS_GRADES"     => ->(account_id:) { "accounts/#{account_id}/analytics/completed/grades" },
      
      #STATISTICS
      "ACCOUNT_TERM_ANALYTICS_STATISTICS"      => ->(account_id:, term_id:) { "accounts/#{account_id}/analytics/terms/#{term_id}/statistics" },
      "ACCOUNT_CURRENT_ANALYTICS_STATISTICS"   => ->(account_id:) { "accounts/#{account_id}/analytics/current/statistics" },
      "ACCOUNT_COMPLETED_ANALYTICS_STATISTICS" => ->(account_id:) { "accounts/#{account_id}/analytics/completed/statistics" },
      
      #COURSE-LEVEL
      "COURSE_ANALYTICS"                       => ->(course_id:) { "courses/#{course_id}/analytics/activity" },
      "COURSE_ANALYTICS_ASSIGNMENTS"           => ->(course_id:) { "courses/#{course_id}/analytics/assignments" },
      "COURSE_ANALYTICS_STUDENT_SUMMARIES"     => ->(course_id:) { "courses/#{course_id}/analytics/student_summaries" },
      "COURSE_ANALYTICS_STUDENT_ID"            => ->(course_id:, student_id:) { "courses/#{course_id}/analytics/users/#{student_id}/activity" },
      "COURSE_ANALYTICS_STUDENT_ASSIGNMENTS"   => ->(course_id:, student_id:) { "courses/#{course_id}/analytics/users/#{student_id}/assignments" },
      "COURSE_ANALYTICS_STUDENT_MESSAGE"       => ->(course_id:, student_id:) { "courses/#{course_id}/analytics/users/#{student_id}/communication" },
      
      #EXTERNAL FEEDS
      "COURSE_EXTERNAL_FEEDS"                  => ->(course_id:) { "courses/#{course_id}/external_feeds" },
      "GROUP_EXTERNAL_FEEDS"                   => ->(groups_id:) { "groups/#{groups_id}/external_feeds" },
      "COURSE_EXTERNAL_FEED"                   => ->(course_id:, external_feed_id:) { "courses/#{course_id}/external_feeds/#{external_feed_id}" },
      "GROUP_EXTERNAL_FEED"                    => ->(groups_id:, external_feed_id:) { "groups/#{groups_id}/external_feeds/#{external_feed_id}" },
      
      #ASSIGNMENT GROUP
      "COURSE_ASSIGNMENT_GROUPS"               => ->(course_id:) { "courses/#{course_id}/assignment_groups" },
      "COURSE_ASSIGNMENT_SINGLE_GROUP"         => ->(course_id:, assignment_group_id:) { "courses/#{course_id}/assignment_groups/#{assignment_group_id}" },
      "COURSE_ASSIGNMENT_SINGLE_GROUP_EDIT"    => ->(course_id:, assignment_group_id:) { "courses/#{course_id}/assignment_groups/#{assignment_group_id}" },
      "COURSE_ASSIGNMENT_SINGLE_GROUP_DEL"     => ->(course_id:, assignment_group_id:) { "courses/#{course_id}/assignment_groups/#{assignment_group_id}" },
       
      #ASSIGNMENT OVERRIDE
      "LIST_OVERRIDE_ASSIGNMENT"               => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}/overrides" },
      "OVERRIDE_ASSIGNMENT"                    => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}/overrides/#{id}" },
      "LIST_OVERRIDE_ASSIGNMENT_GROUP"         => ->(group_id:, assignment_id:) { "courses/#{group_id}/assignments/#{assignment_id}/override" },
      
      #ASSIGNMENTS
      "DELETE_ASSIGNMENT"                      => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}" },
      "LIST_ASSIGNMENTS"                       => ->(course_id: ) { "courses/#{course_id}/assignments" },
      "SINGLE_ASSIGNMENT"                      => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}" },
      "EDIT_ASSIGNMENT"                        => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}" },
      
      #Appointment Groups
      "LIST_APPOINTMENT_GROUPS"                => ->() { "appointment_groups" },
      "CREATE_APPOINTMENT_ACCOUNT"             => ->() { "appointment_groups" },
      "SINGLE_APPOINTMENT_GROUP"               => ->(account_id:) { "appointment_groups/#{account_id}" },
      "UPDATE_APPOINTMENT_GROUPS"              => ->(account_id:) { "appointment_groups/#{account_id}" },
      "DELETE_APPOINMENT_GROUP"                => ->(account_id:) { "appointment_groups/#{account_id}" },
      "LIST_USER_PARTICIPANTS"                 => ->(account_id:) { "appointment_groups/#{account_id}/users" },
      "STUDENT_GROUP_PARTICIPANTS"             => ->(account_id:) {  "appointment_groups/#{account_id}/groups" },
      
      #SUBMISSIONS
      "LIIST_ASSIGNMENT_SUBMISSIONS"           => ->(course_id:, assignment_id:) { "courses/#{course_id}/assignments/#{assignment_id}/submissions" },
      
      #COURSES
      "COURSES_PER_USER"                       => ->() { "courses" },
      "COURSES_SINGLE_USER"                    => ->(user_id:) { "users/#{user_id}/courses" },
      "STUDENTS_IN_COURSE"                     => ->(course_id:) { "users/#{course_id}/students" },
      "USERS_IN_COURSE"                        => ->(course_id:) { "courses/#{course_id}/users" },
      "SEARCH_USERS_IN_COURSE"                 => ->(course_id:) { "courses/#{course_id}/search_users" },
      "RECENT_STUDENTS_IN_COURSE"              => ->(course_id:) { "courses/#{course_id}/recent_students" },
      "GET_SINGLE_USER"                        => ->(course_id:, user_id:) { "courses/#{course_id}/users/#{user_id}" },
      "COURSE_ACTIVITY_STREAM"                 => ->(course_id:) { "courses/#{course_id}/activity_stream" },
      "COURSE_ACTIVITY_STREAM_SUMMARY"         => ->(course_id:) { "courses/#{course_id}/activity_stream/summary" },
      "COURSE_TODO_ITEMS"                      => ->(course_id:) { "courses/#{course_id}/todo" },
      "CONCLUDE_COURSE"                        => ->(course_id:) { "courses/#{course_id}" },
      "COURSE_SETTINGS"                        => ->(course_id:) { "courses/#{course_id}/settings" },
      "UPDATE_COURSE_SETTINGS"                 => ->(course_id:) { "courses/#{course_id}/settings" },
      "GET_SINGLE_COURSE"                      => ->(course_id:) { "courses/#{course_id}" },
      "GET_SINGLE_COURSE_FROM_ACCOUNT"         => ->(account_id:, course_id:) { "accounts/#{account_id}/courses/#{course_id}" },
      "UPDATE_SINGLE_COURSE"                   => ->(course_id:) { "courses/#{course_id}" },
      "UPDATE_COURSES"                         => ->(account_id:) { "accounts/#{account_id}/courses }" }
    }
  end

end
