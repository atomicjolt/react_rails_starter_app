//
// Shared Brand Configs
//
// Share a BrandConfig (Theme)
// Create a SharedBrandConfig, which will give the given brand_config a name
// and make it available to other users of this account.
//
// API Docs: https://canvas.instructure.com/doc/api/shared_brand_configs.html
// API Url: accounts/{account_id}/shared_brand_configs
//
// Example:
// const query = {
//   shared_brand_config[name] (required)
//   shared_brand_config[brand_config_md5] (required)
// }
// return canvasRequest(share_brandconfig_theme, {account_id}, query);
export const share_brandconfig_theme = { type: "SHARE_BRANDCONFIG_THEME", method: "post", key: "share_brandconfig_themeshare_brandconfig_theme_account_id", required: ["account_id"] };

// Update a shared theme
// Update the specified shared_brand_config with a new name or to point to a new brand_config.
// Uses same parameters as create.
//
// API Docs: https://canvas.instructure.com/doc/api/shared_brand_configs.html
// API Url: accounts/{account_id}/shared_brand_configs/{id}
//
// Example:
// return canvasRequest(update_shared_theme, {account_id, id});
export const update_shared_theme = { type: "UPDATE_SHARED_THEME", method: "put", key: "update_shared_themeupdate_shared_theme_{account_id}_{id}", required: ["account_id","id"] };

// Un-share a BrandConfig (Theme)
// Delete a SharedBrandConfig, which will unshare it so you nor anyone else in
// your account will see it as an option to pick from.
//
// API Docs: https://canvas.instructure.com/doc/api/shared_brand_configs.html
// API Url: shared_brand_configs/{id}
//
// Example:
// return canvasRequest(un_share_brandconfig_theme, {id});
export const un_share_brandconfig_theme = { type: "UN_SHARE_BRANDCONFIG_THEME", method: "delete", key: "un_share_brandconfig_themeun_share_brandconfig_theme_id", required: ["id"] };