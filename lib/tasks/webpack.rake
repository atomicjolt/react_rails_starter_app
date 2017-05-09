require "pp"

desc "compile bundles using webpack"
task "assets:precompile" do
  `yarn build_pack`
  `mkdir -p ./config/assets/`
  `mv ./public/assets/*webpack-common-manifest.json ./config/assets/`
  `mv ./public/assets/*webpack-assets.json ./config/assets/`
end
