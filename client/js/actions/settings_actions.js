import constants  from '../constants/action_types';

export default {
  loadSettings: function (settings){
    return {
      type: constants.LOAD_SETTINGS,
      settings
    };
  }
};
