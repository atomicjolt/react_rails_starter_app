require "webmock/rspec"

# Don't allow real connections when testing
WebMock.disable_net_connect!(allow_localhost: true)
