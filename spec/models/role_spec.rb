require "rails_helper"

describe Role, type: :model do
  it "should order by name" do
    role1 = create(:role, name: "student")
    role2 = create(:role, name: "admin")
    role3 = create(:role, name: "teacher")
    roles = Role.by_alpha
    expect(roles.first).to eq(role2)
    expect(roles.second).to eq(role1)
    expect(roles.third).to eq(role3)
  end
end
