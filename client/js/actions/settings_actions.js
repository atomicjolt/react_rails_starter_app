import constants  from '../constants';

export default {
  loadSettings: function (settings){
    return {
      type: constants.LOAD_SETTINGS,
      settings
    };
  }
};
