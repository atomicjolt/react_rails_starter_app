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
          hexdigest = ::Digest::SHA512.hexdigest(pbkdf2)
          "$pbkdf2_hmac$#{stretches}$#{hexdigest}"
        end

        def self.salt(stretches)
          Devise.friendly_token(64)
        end

        def self.compare(encrypted_password, password, _stretches, salt, pepper)
          _version, iterations, _password_hash = self.split_hash(encrypted_password)
          Devise.secure_compare(encrypted_password, digest(password, iterations, salt, pepper))
        end

        private

        def self.split_hash(encrypted_password)
          _, version, iterations, password_hash = encrypted_password.split('$')
          return version.to_str, iterations.to_i, password_hash.to_str
        end
      end
    end
  end
end
