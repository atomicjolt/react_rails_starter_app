
def build_manifest(manifest_name, kind)
  configs_dir = Rails.root.join("config", "assets")
  Rails.configuration.webpack[manifest_name] = {}
  Dir.glob("#{configs_dir}/*#{kind}") do |file|
    app_name = File.basename(file).gsub("-#{kind}", "")
    Rails.configuration.webpack[manifest_name][app_name] = JSON.parse(
      File.read(file),
    ).with_indifferent_access
  end
end

if Rails.configuration.webpack[:use_manifest]
  build_manifest(:asset_manifest, "webpack-assets.json")
  build_manifest(:common_manifest, "webpack-common-manifest.json")
end
