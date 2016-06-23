const initialState = {};

export default (state = initialState, action) => {
  return state; // Just return state. Don't let settings from the server mutate.
};