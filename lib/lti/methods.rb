module Lti
  module Methods
    extend ActiveSupport::Concern

    included do
      before_save :set_lti
    end

    def set_lti
      unless self.lti_key && self.lti_secret
        key = begin
          random_key
        end until !self.class.find_by(lti_key: key)
        self.lti_key = random_key
        self.lti_secret = ::SecureRandom::hex(20)
      end
    end

    def random_key
      key_length = 14 # will generate a key 15 chars long
      letters = ['B', 'C', 'D', 'F', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
      numbers = [2, 3, 4, 7, 9]
      set = letters | numbers # combine arrays
      set.sort_by{rand}[0..key_length].join('').to_s # randomize array and take the first 15 elements and make them a string
    end

  end
end
