require "rails_helper"

describe User, type: :model do
  before do
    @user = FactoryGirl.create(:user)
    @attr = {
      name: "Example User",
      email: "user@example.com",
      password: "foobar888",
      password_confirmation: "foobar888",
    }
  end

  it "should create a new instance given a valid attribute" do
    user = User.new(@attr)
    user.skip_confirmation!
    user.save!
  end

  it "should require an email address" do
    no_email_user = User.new(@attr.merge(email: ""))
    expect(no_email_user).to be_invalid
  end

  it "should accept valid email addresses" do
    addresses = %w[user@foo.com THE_USER@foo.bar.org first.last@foo.jp]
    addresses.each do |address|
      valid_email_user = User.new(@attr.merge(email: address))
      expect(valid_email_user).to be_valid
    end
  end

  it "should reject invalid email addresses" do
    addresses = %w[user@foo,com user_at_foo.org example.user@foo.]
    addresses.each do |address|
      invalid_email_user = User.new(@attr.merge(email: address))
      expect(invalid_email_user).to be_invalid
    end
  end

  it "should reject duplicate email addresses" do
    user = FactoryGirl.create(:user)
    user_with_duplicate_email = User.new(@attr.merge(email: user.email))
    expect(user_with_duplicate_email).to be_invalid
  end

  it "should reject email addresses identical up to case" do
    email = "a_random_uppercase_email@example.com"
    FactoryGirl.create(:user, email: email)
    user_with_duplicate_email = User.new(@attr.merge(email: email.upcase))
    expect(user_with_duplicate_email).to be_invalid
  end

  it "should raise an exception if an attempt is made to write a duplicate email to the database" do
    user = FactoryGirl.create(:user)
    user_with_duplicate_email = User.new(@attr.merge(email: user.email))
    expect do
      user_with_duplicate_email.save(validate: false)
    end.to raise_error(ActiveRecord::RecordNotUnique)
  end

  describe "passwords" do
    it "should have a password attribute" do
      expect(@user).to respond_to(:password)
    end

    it "should have a password confirmation attribute" do
      expect(@user).to respond_to(:password_confirmation)
    end
  end

  describe "password validations" do
    it "should require a password" do
      user = FactoryGirl.build(:user, @attr.merge(password: "", password_confirmation: ""))
      expect(user).to be_invalid
    end

    it "should require a matching password confirmation" do
      user = User.new(@attr.merge(password_confirmation: "invalid"))
      expect(user).to be_invalid
    end

    it "should reject short passwords" do
      short = "a" * 5
      hash = @attr.merge(password: short, password_confirmation: short)
      user = User.new(hash)
      expect(user).to be_invalid
    end
  end

  describe "password encryption" do
    it "should have an encrypted password attribute" do
      expect(@user).to respond_to(:encrypted_password)
    end

    it "should set the encrypted password attribute" do
      expect(@user.encrypted_password).to be_present
    end
  end

  describe "display_name" do
    it "should provide the name" do
      user = FactoryGirl.create(:user, name: "test guy")
      expect(user.display_name).to eq("test guy")
    end
  end

  describe "omniauth" do
    before do
      @uid = "test"
      @provider = "facebook"
      @existing_email = "test@example.com"
      @new_email = "newtest@example.com"
      @provider_url = "https://www.facebook.com"
    end
    describe "for_auth" do
      before do
        @user = FactoryGirl.create(:user, email: @existing_email)
        @user.authentications.create!(uid: @uid, provider: @provider, provider_url: @provider_url)
      end
      describe "user already exists" do
        it "should find the existing user" do
          auth = get_omniauth(
            "uuid" => @uid,
            "provider" => @provider,
            "facebook" => {
              "email" => @existing_email,
              "url" => @provider_url,
            },
          )
          user = User.for_auth(auth)
          expect(user.id).to eq(@user.id)
          expect(user.email).to eq(@existing_email)
        end
      end
      describe "user doesn't exist" do
        it "should not find a user" do
          auth = get_omniauth(
            "uuid" => "non_existing_uid",
            "provider" => @provider,
            "facebook" => { "email" => "other@example.com" },
          )
          user = User.for_auth(auth)
          expect(user).to be_nil
        end
      end
    end
    describe "apply_oauth" do
      it "should add values from the omniauth result to the user" do
        auth = get_omniauth("uuid" => @uid, "provider" => @provider, "facebook" => { "email" => @new_email })
        user = User.new
        user.apply_oauth(auth)
        expect(user.email).to eq(@new_email)
        expect(user.name).to eq("foo bar") # from default omniauth test data
      end
    end
    describe "oauth_name" do
      it "should extract the correct name from the auth object" do
        auth = get_canvas_omniauth
        name = User.oauth_name(auth)
        expect(name).to eq("Test Guy")
      end
    end
    describe "oauth_email" do
      it "should extract the correct email from the auth object" do
        auth = get_canvas_omniauth
        email = User.oauth_email(auth)
        expect(email).to eq("testguy@example.com")
      end
      it "should handle a request that doesn't include an email" do
        auth = get_canvas_omniauth_no_email
        email = User.oauth_email(auth)
        expect(email).to eq("1@atomicjolt.instructure.com")
      end
    end
    describe "oauth_timezone" do
      it "should extract the correct timezone from the auth object" do
        auth = get_canvas_omniauth
        timezone = User.oauth_timezone(auth)
        expect(timezone.name).to eq("America/Denver")
      end
    end
    describe "params_for_create" do
      it "should get the create parameters for the user" do
        auth = get_canvas_omniauth
        attributes = User.params_for_create(auth)
        expect(attributes[:email]).to eq(auth["extra"]["raw_info"]["primary_email"])
        expect(attributes[:name]).to eq(auth["info"]["name"])
      end
    end
    describe "associate_account" do
      before do
        @uid = "test"
        @provider = "facebook"
        @new_email = "newtest@example.com"
      end
      it "should add an authentication for an existing user account" do
        user = FactoryGirl.create(:user, email: "test@example.com")
        auth = get_omniauth(
          "uuid" => @uid,
          "provider" => @provider,
          "facebook" => { "email" => @new_email },
        )
        count = user.authentications.length
        user.associate_account(auth)
        expect(user.authentications.length).to eq(count + 1)
        expect(user.authentications.last.uid).to eq(@uid)
      end
    end
    describe "setup_authentication" do
      before do
        @uid = "anewuser"
        @email = "anewuser@example.com"
      end
      it "should set the provider url" do
        provider_url = "http://www.example.com"
        auth = get_omniauth(
          "uuid" => @uid,
          "provider" => @provider,
          "facebook" => { "email" => @email, "url" => provider_url },
        )
        auth = @user.setup_authentication(auth)
        expect(auth.provider_url).to eq(provider_url)
      end
      it "should set the provider url without the path" do
        provider_url = "http://www.example.com/some/path"
        auth = get_omniauth(
          "uuid" => @uid,
          "provider" => @provider,
          "facebook" => { "email" => @email, "url" => provider_url },
        )
        auth = @user.setup_authentication(auth)
        expect(auth.provider_url).to eq("http://www.example.com")
      end
      it "should handle sub domains" do
        provider_url = "http://foo.example.com/some/path"
        auth = get_omniauth(
          "uuid" => @uid,
          "provider" => @provider,
          "facebook" => { "email" => @email, "url" => provider_url },
        )
        auth = @user.setup_authentication(auth)
        expect(auth.provider_url).to eq("http://foo.example.com")
      end
    end
  end

  describe "roles" do
    describe "add_to_role" do
      it "adds the user to given role" do
        user = FactoryGirl.create(:user)
        user.add_to_role("thefoo")
        expect(user.role?("thefoo")).to be true
      end
      it "adds the user to given role with a context" do
        context_id = "asdf"
        user = FactoryGirl.create(:user)
        user.add_to_role("thefoo", context_id)
        expect(user.role?("thefoo", context_id)).to be true
      end
    end
    describe "has_role?" do
      it "checks to see if the user is any of the specified roles with context" do
        context_id = "asdf"
        user = FactoryGirl.create(:user)
        user.add_to_role("thefoo", context_id)
        user.add_to_role("thewall")
        expect(user.has_role?(context_id, "thefoo", "brick")).to be true
        expect(user.has_role?(nil, "thewall", "brick")).to be true
        expect(user.has_role?(nil, "brick", "foo")).to be false
      end
    end
    describe "any_role?" do
      it "checks to see if the user is any of the specified roles" do
        user = FactoryGirl.create(:user)
        user.add_to_role("thefoo")
        user.add_to_role("thewall")
        expect(user.any_role?("thewall", "brick")).to be true
        expect(user.any_role?("brick", "foo")).to be false
      end
    end
  end
end
