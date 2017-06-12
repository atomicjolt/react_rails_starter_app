require "rails_helper"

describe Permission, type: :model do
  it "should find matching permissions with or without context" do
    context_id = "1234"
    permission = create(:permission)
    permission1 = create(:permission, context_id: context_id)
    permission2 = create(:permission, context_id: "asdf1234")
    permissions = Permission.by_nil_or_context(context_id)
    expect(permissions.include?(permission)).to be true
    expect(permissions.include?(permission1)).to be true
    expect(permissions.include?(permission2)).to be false
  end
end
