# From http://wealsodocookies.com/posts/how-to-test-facebook-login-using-devise-omniauth-rspec-and-capybara
def get_omniauth(opts = {}, credentials = nil)
  default = {'provider' => 'facebook',
             'uuid'     => "1234",
             'facebook' => {
                            'email' => "foobar@example.com",
                            'gender' => "Male",
                            'first_name' => "foo",
                            'last_name' => "bar",
                            'description' => "Long long ago in a far away place",
                            'location' => 'Logan, UT',
                            'urls' => {},
                            'url' => 'http://provider.example.com',
                            'image' => 'http://www.example.com/profile.jpg'
                          }
            }
  credentials ||= {
    'token' => 'test',
    'secret' => 'secret'
  }
  auth = default.deep_merge(opts)
  provider = auth['provider']
  user_hash = auth[provider]

  OmniAuth.config.test_mode = true

  OmniAuth.config.mock_auth[provider] = {
    'uid' => auth['uuid'],
    'credentials' => credentials,
    'provider' => provider,
    "info" => {
      "email" => user_hash['email'],
      "name" => [user_hash['first_name'], user_hash['last_name']].join(" "),
      "first_name" => user_hash['first_name'],
      "last_name" => user_hash['last_name'],
      "description" => user_hash['description'],
      "location" => user_hash['location'],
      "urls" => user_hash['urls'],
      "image" => user_hash['image'],
      "url" => user_hash['url']
    },
    "extra" => {
      "raw_info" => {
        "gender" => user_hash['gender']
      }
    }
  }
end

def get_invalid_omniauth(opts = {})

  credentials = { 'provider' => 'facebook',
                  'invalid'  => 'invalid_crendentials'
                 }.merge(opts)

  OmniAuth.config.test_mode = true
  OmniAuth.config.mock_auth[credentials['provider']] = credentials['invalid']

end
