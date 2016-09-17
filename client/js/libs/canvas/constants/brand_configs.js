//
// Brand Configs
//
// Get the brand config variables that should be used for this domain
// Will redirect to a static json file that has all of the brand
// variables used by this account. Even though this is a redirect,
// do not store the redirected url since if the account makes any changes
// it will redirect to a new url. Needs no authentication.
//
// API Docs: https://canvas.instructure.com/doc/api/brand_configs.html
// API Url: brand_variables
//
// Example:
// return canvasRequest(get_brand_config_variables_that_should_be_used_for_this_domain, {});
export const get_brand_config_variables_that_should_be_used_for_this_domain = { type: "GET_BRAND_CONFIG_VARIABLES_THAT_SHOULD_BE_USED_FOR_THIS_DOMAIN", method: "get"};