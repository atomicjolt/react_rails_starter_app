require 'rails_helper'

describe ExternalIdentifier, type: :model do

  it { should belong_to :user }

end