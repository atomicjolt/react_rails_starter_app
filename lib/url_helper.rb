class UrlHelper

  def self.safe_host(url)
    return nil if url.blank?
    UrlHelper.host(url)
  end

  def self.ensure_scheme(url)
    return nil unless url.present?
    url = "http://#{url}" unless url.include?("http")
    url
  end

  def self.host(url)
    return nil unless url.present?
    URI.parse(ensure_scheme(url)).host
  end

  def self.scheme_host(url)
    return nil unless url.present?
    parsed = URI.parse(ensure_scheme(url))
    "#{parsed.scheme}://#{parsed.host}"
  end

  def self.host_from_instance_guid(url)
    url = URI.parse(self.ensure_scheme(url))
    parts = url.host.split('.')
    if parts.length > 2
      parts[1, parts.length].join('.')
    else
      parts.join('.')
    end
  end

end