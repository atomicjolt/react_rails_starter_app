"use strict";

import Constants   from   "../constants";
import Dispatcher  from   "../dispatcher";
import Api         from   "./api";

export default {

  loadStudents(course_id, section_id){
    if (section_id) {
      Api.get(Constants.STUDENTS_LOADED, `api/courses/${course_id}/sections/${section_id}/students`);
    } else {
      Api.get(Constants.STUDENTS_LOADED, `api/courses/${course_id}/students`);
    }
  }
};
