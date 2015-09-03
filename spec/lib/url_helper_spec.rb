require 'spec_helper'
require 'url_helper'

describe UrlHelper do

  describe "#ensure_scheme" do
    it "should add http onto url if it doesn't exist" do
      expect(UrlHelper.ensure_scheme('www.example.com')).to eq('http://www.example.com')
    end
    it "should not add http onto url if it does exist" do
      expect(UrlHelper.ensure_scheme('https://www.example.com')).to eq('https://www.example.com')
    end
  end

  describe "#host" do
    it "should get the host name from the url" do
      expect(UrlHelper.host('http://www.example.com')).to eq('www.example.com')
      expect(UrlHelper.host('http://www.example.com/some/path')).to eq('www.example.com')
      expect(UrlHelper.host('http://www.example.com?some=thing')).to eq('www.example.com')
      expect(UrlHelper.host('www.example.com')).to eq('www.example.com')
      expect(UrlHelper.host('www.example.com/some/path')).to eq('www.example.com')
      expect(UrlHelper.host('www.example.com?some=thing')).to eq('www.example.com')
    end
    it "should get the host with subdomain from the url" do
      expect(UrlHelper.host('http://foo.example.com')).to eq('foo.example.com')
      expect(UrlHelper.host('http://foo.example.com/some/path')).to eq('foo.example.com')
      expect(UrlHelper.host('http://foo.example.com?some=thing')).to eq('foo.example.com')
      expect(UrlHelper.host('foo.example.com')).to eq('foo.example.com')
      expect(UrlHelper.host('foo.example.com/some/path')).to eq('foo.example.com')
      expect(UrlHelper.host('foo.example.com?some=thing')).to eq('foo.example.com')
    end
  end

  describe "#scheme_host" do
    it "should return the scheme and host" do
      expect(UrlHelper.scheme_host('https://www.example.com')).to eq('https://www.example.com')
      expect(UrlHelper.scheme_host('https://www.example.com/some/path')).to eq('https://www.example.com')
      expect(UrlHelper.scheme_host('https://www.example.com?some=thing')).to eq('https://www.example.com')
      expect(UrlHelper.scheme_host('http://www.example.com')).to eq('http://www.example.com')
      expect(UrlHelper.scheme_host('http://www.example.com/some/path')).to eq('http://www.example.com')
      expect(UrlHelper.scheme_host('http://www.example.com?some=thing')).to eq('http://www.example.com')
      expect(UrlHelper.scheme_host('www.example.com')).to eq('http://www.example.com')
      expect(UrlHelper.scheme_host('www.example.com/some/path')).to eq('http://www.example.com')
      expect(UrlHelper.scheme_host('www.example.com?some=thing')).to eq('http://www.example.com')
    end
    it "should return the scheme and host with subdomain" do
      expect(UrlHelper.scheme_host('https://foo.example.com')).to eq('https://foo.example.com')
      expect(UrlHelper.scheme_host('https://foo.example.com/some/path')).to eq('https://foo.example.com')
      expect(UrlHelper.scheme_host('https://foo.example.com?some=thing')).to eq('https://foo.example.com')
      expect(UrlHelper.scheme_host('http://foo.example.com')).to eq('http://foo.example.com')
      expect(UrlHelper.scheme_host('http://foo.example.com/some/path')).to eq('http://foo.example.com')
      expect(UrlHelper.scheme_host('http://foo.example.com?some=thing')).to eq('http://foo.example.com')
      expect(UrlHelper.scheme_host('foo.example.com')).to eq('http://foo.example.com')
      expect(UrlHelper.scheme_host('foo.example.com/some/path')).to eq('http://foo.example.com')
      expect(UrlHelper.scheme_host('foo.example.com?some=thing')).to eq('http://foo.example.com')
    end
  end

  describe "#host_from_instance_guid" do
    it "should get the base domain" do
      expect(UrlHelper.host_from_instance_guid('http://www.example.com')).to eq('example.com')
      expect(UrlHelper.host_from_instance_guid('http://foo.example.com')).to eq('example.com')
    end
  end
end