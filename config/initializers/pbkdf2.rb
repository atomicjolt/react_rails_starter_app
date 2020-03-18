module Devise
  module Encryptable
    module Encryptors
      class Pbkdf2 < Base
        def self.digest(password, stretches, salt, pepper)
          if pepper.present?
            password = "#{password}#{pepper}"
          end
          digest = OpenSSL::Digest::SHA512.new
          keylen = digest.digest_length
          pbkdf2 = OpenSSL::KDF.pbkdf2_hmac(
            password,
            salt: salt,
            iterations: stretches,
            length: keylen,
            hash: digest,
          )
          ::Digest::SHA512.hexdigest(pbkdf2)
        end
      end
    end
  end
end
