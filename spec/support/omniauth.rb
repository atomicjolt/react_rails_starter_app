# From http://wealsodocookies.com/posts/how-to-test-facebook-login-using-devise-omniauth-rspec-and-capybara
def get_omniauth(opts = {}, credentials = nil)
  default = {
    "provider" => "facebook",
    "uuid"     => "1234",
    "facebook" => {
      "email" => "foobar@example.com",
      "gender" => "Male",
      "first_name" => "foo",
      "last_name" => "bar",
      "description" => "Long long ago in a far away place",
      "location" => "Logan, UT",
      "urls" => {},
      "url" => "http://provider.example.com",
      "image" => "http://www.example.com/profile.jpg",
    },
  }
  credentials ||= {
    "token" => "test",
    "secret" => "secret",
  }
  auth = default.deep_merge(opts)
  provider = auth["provider"]
  user_hash = auth[provider]

  OmniAuth.config.test_mode = true

  OmniAuth.config.mock_auth[provider] = {
    "uid" => auth["uuid"],
    "credentials" => credentials,
    "provider" => provider,
    "info" => {
      "email" => user_hash["email"],
      "name" => [user_hash["first_name"], user_hash["last_name"]].join(" "),
      "first_name" => user_hash["first_name"],
      "last_name" => user_hash["last_name"],
      "description" => user_hash["description"],
      "location" => user_hash["location"],
      "urls" => user_hash["urls"],
      "image" => user_hash["image"],
      "url" => user_hash["url"],
    },
    "extra" => {
      "raw_info" => {
        "gender" => user_hash["gender"],
      },
    },
  }
end

def get_invalid_omniauth(opts = {})
  credentials = { "provider" => "facebook",
                  "invalid"  => "invalid_crendentials" }.merge(opts)
  OmniAuth.config.test_mode = true
  OmniAuth.config.mock_auth[credentials["provider"]] = credentials["invalid"]
end

def get_canvas_omniauth(opts = {})
  auth = get_canvas_auth(opts)
  OmniAuth.config.mock_auth[:canvas] = OmniAuth::AuthHash.new(auth)
end

def get_canvas_auth(opts = {})
  {
    "provider" => "canvas",
    "uid" => 1,
    "info" => {
      "name" => "Test Guy",
      "email" => "testguy@example.com",
      "bio" => "",
      "title" => "",
      "nickname" => "testguy@example.com",
      "active_avatar" => "https://secure.gravatar.com/avatar/someone.png",
      "url" => "https://atomicjolt.instructure.com",
    },
    "credentials" => {
      "token" => "abcdefg",
      "refresh_token" => "abcdefg",
      "expires_at" => 1505946533,
      "expires" => true,
    },
    "extra" => {
      "raw_info" => {
        "id" => 1,
        "name" => "testguy@example.com",
        "short_name" => "testguy@example.com",
        "sortable_name" => "testguy@example.com",
        "sis_user_id" => "1234",
        "sis_login_id" => "testguy@example.com",
        "login_id" => "testguy@example.com",
        "avatar_url" => "https://secure.gravatar.com/avatar/someone.png",
        "integration_id" => nil,
        "title" => "",
        "bio" => "",
        "primary_email" => "testguy@example.com",
        "time_zone" => "America/Denver",
        "locale" => nil,
        "calendar" => {
          "ics" => "https://atomicjolt.instructure.com/feeds/calendars/user_abc.ics",
        },
      },
    },
  }.merge(opts)
end

def get_canvas_omniauth_no_email(opts = {})
  auth = get_canvas_auth_no_email(opts)
  OmniAuth.config.mock_auth[:canvas] = OmniAuth::AuthHash.new(auth)
end

def get_canvas_auth_no_email(opts = {})
  {
    "provider" => "canvas",
    "uid" => 1,
    "info" => {
      "name" => "Test Guy",
      "bio" => "",
      "title" => "",
      "nickname" => "testguy",
      "active_avatar" => "https://secure.gravatar.com/avatar/someone.png",
      "url" => "https://atomicjolt.instructure.com",
    },
    "credentials" => {
      "token" => "abcdefg",
      "refresh_token" => "abcdefg",
      "expires_at" => 1505946533,
      "expires" => true,
    },
    "extra" => {
      "raw_info" => {
        "id" => 1,
        "name" => "Test Guy",
        "short_name" => "Test",
        "sortable_name" => "Guy",
        "sis_user_id" => "1234",
        "sis_login_id" => "testguy1234",
        "login_id" => "testguy",
        "avatar_url" => "https://secure.gravatar.com/avatar/someone.png",
        "integration_id" => nil,
        "title" => "",
        "bio" => "",
        "time_zone" => "America/Denver",
        "locale" => nil,
        "calendar" => {
          "ics" => "https://atomicjolt.instructure.com/feeds/calendars/user_abc.ics",
        },
      },
    },
  }.merge(opts)
end
