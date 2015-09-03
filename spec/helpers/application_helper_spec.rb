require "rails_helper"

describe ApplicationHelper do

  describe "#client_images" do
    it "generates a string that can be passed to a js client containing the requested images" do
      result = helper.client_images("dogs.png", "other/cats.svg")
      expect(result).to eq('{ dogs_png : "/images/dogs.png", other_cats_svg : "/images/other/cats.svg" }')
    end
  end

end