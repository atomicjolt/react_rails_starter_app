# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.initialize_on_precompile = false

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( evaluations.js app_admin_web_pack_bundle.js app_web_pack_bundle.js styles_web_pack_bundle.js)
Rails.application.config.assets.precompile += %w( app_admin_web_pack_bundle.css admin.css )