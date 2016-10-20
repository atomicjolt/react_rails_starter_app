require 'rails_helper'

RSpec.describe Nonce, type: :model do

  describe "valid?" do

    it "is true when nonce is unique" do
      nonce = "asdf1234"
      expect(described_class.valid?(nonce)).to be true
    end

    it "is false for duplicate nonce" do
      nonce = "asdf5678"
      described_class.create!(nonce: nonce)
      expect(described_class.valid?(nonce)).to be false
    end

    it "generates logs entry for invalid nonce" do
      nonce = "bad-nonce"
      allow(described_class).to receive(:create!).and_raise
      expect(Rails.logger).to receive(:warn).with("Failed to create nonce: #{nonce}")
      described_class.valid?(nonce)
    end

  end

  describe "clean" do

    it "Removes old nonces" do
      Time.freeze do
        expect(described_class).to receive(:delete_all).with(["created_at < ?", Time.now - 6.hours])
        described_class.clean
      end
    end

  end

end
