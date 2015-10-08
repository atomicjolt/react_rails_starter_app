require 'webmock/rspec'

# Don't allow real connections when testing
WebMock.disable_net_connect!(allow_localhost: true)

def canvas_headers(options = {})
  {
    "cache-control"  => ["must-revalidate, private, max-age=0"], 
    "content-type" => ["application/json; charset=utf-8"], 
    "date" => ["Tue, 17 Mar 2015 20:58:42 GMT"], 
    "etag" => ["\"c130ed4522ebea32d2649aff2e30fd3a\""], 
    "p3p"  => ["CP=\"None, see http://www.instructure.com/privacy-policy\""], 
    "server" => ["Apache"], 
    "set-cookie" => ["_csrf_token=9ATKDp5mkAhXm5DTVw54PeMj0FoKrA%2BUNQnFEfXgUs6eL4cl5hXEZwL5xoM%2FdhlS2xWAMT%2BHQs1iRLYkv9YTtg%3D%3D; path=/; secure", "canvas_session=LxC99e7zSpIBWuoSrxCHdg.xTKVNyuNeaLj864o1zvSA2YTzFQTPbQNpYoi2ktpSRSfjl0Q7CQe7W543_0So0FLILT3TkPbbGjcfoRGZNBhdWw8iOr7QRrIFwTHFdLNE7DWMRM4ZhX16kNxCI0_OD7g.iGFa_i2CresH7XxNz2ZwUksLtOk.VQiVgw; path=/; secure; HttpOnly"], 
    "status" => ["200"], 
    "vary" => ["Accept-Encoding"], 
    "x-canvas-meta"  => ["a=1;g=4MRcxnx6vQbFXxhLb8005m5WXFM2Z2i8lQwhJ1QT;s=4346;c=cluster35;z=us-east-1e;b=746692;m=746756;u=0.05;y=0.00;d=0.05;"], 
    "x-canvas-user-id" => ["43460000000000001"], 
    "x-frame-options"  => ["SAMEORIGIN"], 
    "x-rack-cache" => ["miss"], 
    "x-request-context-id" => ["51a34ee0-af16-0132-cb5f-12e99fa8d58a"], 
    "x-runtime"  => ["0.186145"], 
    "x-session-id" => ["48896cba407171322f5b940099073514"], 
    "x-ua-compatible"  => ["IE=Edge,chrome=1"], 
    "content-length" => ["2561"], 
    "connection" => ["Close"]
  }.merge(options)
end

def lti_tool_json
  "{\"consumer_key\":\"fake\",\"created_at\":\"2015-03-11T02:12:39Z\",\"description\":\"Customizable free textbooks\",\"domain\":null,\"id\":43460000000000549,\"name\":\"CK-12\",\"updated_at\":\"2015-03-11T02:12:39Z\",\"url\":\"https://www.edu-apps.org/tool_redirect?id=ck12\",\"privacy_level\":\"anonymous\",\"custom_fields\":{},\"workflow_state\":\"anonymous\",\"vendor_help_link\":null,\"user_navigation\":null,\"course_navigation\":null,\"account_navigation\":null,\"resource_selection\":{\"url\":\"https://www.edu-apps.org/tool_redirect?id=ck12\",\"text\":\"CK-12\",\"selection_width\":690,\"selection_height\":530,\"label\":\"CK-12\",\"icon_url\":\"https://www.edu-apps.org/tools/ck12/icon.png\"},\"editor_button\":{\"url\":\"https://www.edu-apps.org/tool_redirect?id=ck12\",\"text\":\"CK-12\",\"selection_width\":690,\"selection_height\":530,\"icon_url\":\"https://www.edu-apps.org/tools/ck12/icon.png\",\"label\":\"CK-12\"},\"homework_submission\":null,\"migration_selection\":null,\"course_home_sub_navigation\":null,\"course_settings_sub_navigation\":null,\"global_navigation\":null,\"assignment_menu\":null,\"file_menu\":null,\"discussion_topic_menu\":null,\"module_menu\":null,\"quiz_menu\":null,\"wiki_page_menu\":null,\"tool_configuration\":null,\"icon_url\":\"https://www.edu-apps.org/tools/ck12/icon.png\",\"not_selectable\":false}"
end

def lti_tool_json2
  "{\"consumer_key\":\"fake\",\"created_at\":\"2015-03-11T02:12:39Z\",\"description\":\"Search publicly available YouTube videos. A new icon will show up in your course rich editor letting you search YouTube and click to embed videos in your course material.\",\"domain\":\"edu-apps.org\",\"id\":43460000000000550,\"name\":\"YouTube\",\"updated_at\":\"2015-03-11T02:12:39Z\",\"url\":\"https://www.edu-apps.org/lti_public_resources/?tool_id=youtube\",\"privacy_level\":\"anonymous\",\"custom_fields\":{},\"workflow_state\":\"anonymous\",\"vendor_help_link\":null,\"user_navigation\":null,\"course_navigation\":null,\"account_navigation\":null,\"resource_selection\":{\"selection_width\":560,\"selection_height\":600,\"label\":\"YouTube\",\"icon_url\":\"https://www.edu-apps.org/assets/lti_public_resources/youtube_icon.png\"},\"editor_button\":{\"selection_width\":560,\"selection_height\":600,\"icon_url\":\"https://www.edu-apps.org/assets/lti_public_resources/youtube_icon.png\",\"label\":\"YouTube\"},\"homework_submission\":null,\"migration_selection\":null,\"course_home_sub_navigation\":null,\"course_settings_sub_navigation\":null,\"global_navigation\":null,\"assignment_menu\":null,\"file_menu\":null,\"discussion_topic_menu\":null,\"module_menu\":null,\"quiz_menu\":null,\"wiki_page_menu\":null,\"tool_configuration\":null,\"icon_url\":\"https://www.edu-apps.org/assets/lti_public_resources/youtube_icon.png\",\"not_selectable\":false}"
end

canvas_courses = "[{\"account_id\":43460000000000017,\"course_code\":\"Biology\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000228,\"is_public\":true,\"name\":\"Biology - ball\",\"start_at\":\"2015-03-11T02:11:57Z\",\"end_at\":\"2014-11-12T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_tXpIlgwxaowPljOdOY3i4336gZTzYdeqWJDDVyC5.ics\"},\"sis_course_id\":\"sdemo-biology-000_2015-03-10T20:12:09-06:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"Grade 2\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000230,\"is_public\":true,\"name\":\"Grade 2 - \",\"start_at\":\"2015-03-11T18:44:33Z\",\"end_at\":\"2014-10-25T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":false,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_lu9o9wH9YQWDDCV18rLvvlSaQAST2tHiL9gIckzN.ics\"},\"sis_course_id\":\"sdemo-grade2-000\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"welcome-to-canvas\",\"default_view\":\"syllabus\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000215,\"is_public\":true,\"name\":\"Welcome to Canvas\",\"start_at\":\"2015-03-03T00:31:29Z\",\"end_at\":null,\"public_syllabus\":false,\"storage_quota_mb\":1500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":false,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_vEnAbIlnKf5jukDCn42JhJXZVS9DvTpJsDMJNsvG.ics\"},\"sis_course_id\":\"_2015-03-02T17:31:28-07:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"Biology\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000233,\"is_public\":true,\"name\":\"Biology - ball\",\"start_at\":\"2015-03-11T19:51:24Z\",\"end_at\":\"2014-11-12T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_pO8Qx1ySnzmedPScsVKsiY28mQkTtYEaNKfXV40p.ics\"},\"sis_course_id\":\"sdemo-biology-000_2015-03-11T13:51:39-06:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"US History\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000231,\"is_public\":true,\"name\":\"American History - \",\"start_at\":\"2015-03-11T18:44:35Z\",\"end_at\":\"2014-10-31T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_bCtSECMTxnjOZehMsDlDCaG7FNNwMK3t3QF93SYj.ics\"},\"sis_course_id\":\"sdemo-amhist-000_2015-03-11T18:44:34+00:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"Grade 8 Math\",\"default_view\":\"syllabus\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000232,\"is_public\":true,\"name\":\"8th Grade Math - \",\"start_at\":\"2015-03-11T18:44:36Z\",\"end_at\":\"2015-04-21T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":9000,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_6LuTullo7Dc47WDnANVqLTVp43BTHBoVdHnSWySy.ics\"},\"sis_course_id\":\"sdemo-math8-000_2015-03-11T18:44:35+00:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"Biology\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000227,\"is_public\":true,\"name\":\"Biology - ball\",\"start_at\":\"2015-03-11T02:00:06Z\",\"end_at\":\"2014-11-12T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_3uFFDiQRvMj91ZqSWcP3PqAkFZzdyY4zm43ZJr8Q.ics\"},\"sis_course_id\":\"sdemo-biology-000_2015-03-10T20:00:18-06:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"},{\"account_id\":43460000000000017,\"course_code\":\"Biology\",\"default_view\":\"wiki\",\"enrollment_term_id\":43460000000000001,\"id\":43460000000000229,\"is_public\":true,\"name\":\"Biology - ball\",\"start_at\":\"2015-03-11T02:29:03Z\",\"end_at\":\"2014-11-12T00:00:00Z\",\"public_syllabus\":false,\"storage_quota_mb\":500,\"is_public_to_auth_users\":false,\"apply_assignment_group_weights\":true,\"calendar\":{\"ics\":\"https://canvas.instructure.com/feeds/calendars/course_2i2nhyQEo889uSN47IstosmQijQtKPbiDrvtKhgQ.ics\"},\"sis_course_id\":\"sdemo-biology-000_2015-03-10T20:29:14-06:00\",\"integration_id\":null,\"enrollments\":[{\"type\":\"teacher\",\"role\":\"TeacherEnrollment\",\"role_id\":822,\"enrollment_state\":\"active\"}],\"hide_final_grades\":false,\"workflow_state\":\"available\"}]"
canvas_accounts = "[{\"id\":43460000000000001,\"name\":\"Atomic Jolt\",\"parent_account_id\":null,\"root_account_id\":null,\"workflow_state\":\"active\",\"default_storage_quota_mb\":500,\"default_user_storage_quota_mb\":50,\"default_group_storage_quota_mb\":50,\"default_time_zone\":\"America/Denver\"}]"
canvas_sub_accounts = "[{\"id\":43460000000000002,\"name\":\"Manually-Created Courses\",\"parent_account_id\":43460000000000001,\"root_account_id\":43460000000000001,\"workflow_state\":\"active\",\"default_storage_quota_mb\":500,\"default_user_storage_quota_mb\":50,\"default_group_storage_quota_mb\":50,\"default_time_zone\":\"America/Denver\",\"sis_account_id\":null,\"sis_import_id\":null,\"integration_id\":null},{\"id\":43460000000000017,\"name\":\"Canvas Demo Courses\",\"parent_account_id\":43460000000000001,\"root_account_id\":43460000000000001,\"workflow_state\":\"active\",\"default_storage_quota_mb\":500,\"default_user_storage_quota_mb\":50,\"default_group_storage_quota_mb\":50,\"default_time_zone\":\"America/Denver\",\"sis_account_id\":null,\"sis_import_id\":null,\"integration_id\":null}]"
canvas_self_accounts = "{\"id\":43460000000000017,\"name\":\"Canvas Demo Courses\",\"parent_account_id\":43460000000000001,\"root_account_id\":43460000000000001,\"workflow_state\":\"active\"}"

RSpec.configure do |config|
  config.before(:each) do

    # ####################################################################################### 
    # Canvas API
    #

    #
    # Courses
    #
    stub_request(:get, %r|http[s]*://nextcourses\.instructure.com/api/v1/courses|).
      to_return(
        status: 200,
        body: canvas_courses,
        headers: canvas_headers
      )

    stub_request(:get, %r|http[s]*://.+\.example.com/api/v1/courses|).
      to_return(
        status: 200,
        body: canvas_courses,
        headers: canvas_headers(
          "link" => %Q{<https://nextcourses.instructure.com/api/v1/courses.json?opaqueA>; rel="current",
                <https://nextcourses.instructure.com/api/v1/courses.json?opaqueB>; rel="next",
                <https://nextcourses.instructure.com/api/v1/courses.json?opaqueC>; rel="first",
                <https://nextcourses.instructure.com/api/v1/courses.json?opaqueD>; rel="last"})
      )

#"link" => ["<https://canvas.instructure.com/api/v1/courses/4346~228/external_tools?page=1&per_page=10>; rel=\"current\",<https://canvas.instructure.com/api/v1/courses/4346~228/external_tools?page=1&per_page=10>; rel=\"first\",<https://canvas.instructure.com/api/v1/courses/4346~228/external_tools?page=1&per_page=10>; rel=\"last\""], 
    
    #
    # Accounts
    #
    stub_request(:get, %r|http[s]*://.+\.example.*com/api/v1/accounts/self|).
      to_return(
        status: 200, 
        body: canvas_accounts, 
        headers: canvas_headers(
          "link" => ["<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"current\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"first\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"last\""]
        )
      )

    stub_request(:get, %r|http[s]*://.+\.example.*com/api/v1/accounts|).
      to_return(
        status: 200, 
        body: canvas_accounts, 
        headers: canvas_headers(
          "link" => ["<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"current\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"first\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"last\""]
        )
      )

    stub_request(:get, %r|http[s]*://.+\.example.*com/api/v1/accounts/.+/sub_accounts|).
      to_return(
        status: 200, 
        body: canvas_sub_accounts, 
        headers: canvas_headers(
          "link" => ["<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"current\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"first\",<https://canvas.instructure.com/api/v1/accounts?page=first&per_page=10>; rel=\"last\""]
        )
      )

    #
    # LTI tools
    #
    ['accounts', 'courses'].each do |kind|
     
      canvas_external_tool_url = %r|http[s]*://.+\.example.*com/api/v1/#{kind}/.+/external_tools|

      stub_request(:get, canvas_external_tool_url).
        to_return(
          status: 200, 
          body: "[#{lti_tool_json}, #{lti_tool_json2}]", 
          headers: canvas_headers)
    
      stub_request(:post, canvas_external_tool_url).
        to_return(
          status: 200, 
          body: lti_tool_json, 
          headers: canvas_headers)

      stub_request(:put, canvas_external_tool_url).
        to_return(
          status: 200, 
          body: lti_tool_json,
          headers: canvas_headers)
    end

  end
end
