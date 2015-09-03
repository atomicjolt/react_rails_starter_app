"use strict";

import React                                                                  from "react";
import User                                                                   from "../../stores/user";
import StoreKeeper                                                            from "../mixins/store_keeper";
import Router                                                                 from "react-router";
import { Toolbar, ToolbarGroup, DropDownMenu, RaisedButton, TextField, Paper, IconButton} from "material-ui";
import AdminActions                                                           from "../../actions/admin";
import Defines          from "../defines";

class ToolBar extends React.Component {

  onToolbarChange(e, index, payload){
    // Generate an action
    AdminActions.changeMainTab(payload);
  }

  render() {
    var dropDownItems = [
      {payload: '0', text: 'Client Info'},
    ];

    var styles = {
      searchBarStyle: {
        marginTop: '9px',
        display: 'inline-block'
      },
      toolbar: {
        position: 'relative',
        background: Defines.colors.white,
        top: '-24px',
        left: '-22',
        width: '103%'
      },
      graphPaper: {
        width: 'auto',
        minHeight: '60px',
        background: 'white'
      },

      graphTitleBar: {
        width: 'auto'
      },

      leftFloat: {
        float: 'left'
      },

      rightFloat: {
        paddingRight: '20px',
        float: 'right'
      }
    };

    return (
      <Toolbar style={styles.toolbar} >
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={dropDownItems} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <IconButton iconClassName="material-icons-action-help" tooltip="Help" />
        </ToolbarGroup>
      </Toolbar>
    );
  }

}

module.exports = ToolBar;