require "pbkdf2"

module Devise
  module Encryptable
    module Encryptors
      class Pbkdf2 < Base
        def self.digest(password, stretches, salt, _pepper)
          pbkdf2 = PBKDF2.new do |p|
            p.password = password
            p.salt = salt
            p.iterations = stretches
            p.hash_function = OpenSSL::Digest::SHA512
          end
          pbkdf2.hex_string
        end
      end
    end
  end
end
