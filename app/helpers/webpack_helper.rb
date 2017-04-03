module WebpackHelper

  def get_src(app_name, chunk_name, kind)
    if Rails.configuration.webpack[:use_manifest]
      manifest = Rails.configuration.webpack[:asset_manifest][app_name]
      "#{Rails.configuration.action_controller.asset_host}/assets/#{manifest[chunk_name][kind]}"
    else
      suffix = kind == "js" ? "_bundle.js" : ".css"
      "#{Rails.application.secrets.assets_url}/#{app_name}/#{chunk_name}#{suffix}"
    end
  end

  def webpack_bundle_tag(app_name, chunk_name)
    src = get_src(app_name, chunk_name, "js")
    "<script src='#{src}' type='text/javascript'></script>".html_safe
  end

  def webpack_styles_tag(app_name, chunk_name)
    src = get_src(app_name, chunk_name, "css")
    "<link rel='stylesheet' href='#{src}' type='text/css'>".html_safe
  end

  def webpack_manifest_script(app_name)
    javascript_tag "window.webpackBundleManifest = #{Rails.configuration.webpack[:common_manifest][app_name].to_json}"
  end

end
