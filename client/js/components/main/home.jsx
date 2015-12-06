"use strict";

import React from 'react';

import StudentActions from "../actions/student";

import SettingsStore  from "../stores/settings";
import StudentsStore  from "../stores/students";

export default class Home extends React.Component{

  constructor(props, context){
    super(props, context);
    this.stores = [StudentsStore];
    this.state = this.getState();
  }

  getState(){
    var settings = SettingsStore.current();
    return {
      course: settings.course,
      is_admin: settings.is_admin,
      students: StudentsStore.students()
    }
  }

  componentWillMount(){
    StudentActions.loadStudents(this.state.course.id, null);
  }

  render(){
    return <div>
      <h2>Students</h2>
      {this.state.students.map((student) => {
          return({student.name});
      })}
    </div>;
  }
};