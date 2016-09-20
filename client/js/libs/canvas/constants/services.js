//
// Services
//
// Get Kaltura config
// Return the config information for the Kaltura plugin in json format.
//
// API Docs: https://canvas.instructure.com/doc/api/services.html
// API Url: services/kaltura
//
// Example:
// return canvasRequest(get_kaltura_config, {});
export const get_kaltura_config = { type: "GET_KALTURA_CONFIG", method: "get", key: "get_kaltura_config", required: [] };

// Start Kaltura session
// Start a new Kaltura session, so that new media can be recorded and uploaded
// to this Canvas instance's Kaltura instance.
//
// API Docs: https://canvas.instructure.com/doc/api/services.html
// API Url: services/kaltura_session
//
// Example:
// return canvasRequest(start_kaltura_session, {});
export const start_kaltura_session = { type: "START_KALTURA_SESSION", method: "post", key: "start_kaltura_session", required: [] };