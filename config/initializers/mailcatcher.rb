# Detect if mailcatcher is running and use that if available
if Rails.env.development?
  begin
    sock = TCPSocket.new("localhost", 1025)
    sock.close
    catcher = true
  rescue
    catcher = false
  end

  if catcher
    ActionMailer::Base.smtp_settings = { :host => "localhost", :port => '1025', }
    ActionMailer::Base.perform_deliveries = true
  end
end
