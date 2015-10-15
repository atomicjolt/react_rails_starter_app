"use strict";

import React                from "react";
import Messages             from "../common/messages";
import LeftNav              from "./left_nav";
import {RouteHandler}       from "react-router";
import AdminTheme           from "./admin_theme";
import Defines              from "../defines";
import BaseComponent        from "../base_component";
import AdminStore           from "../../stores/admin";
import AdminActions         from "../../actions/admin";
import _                    from "lodash";


var mui = require('material-ui');
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();
var { AppCanvas, AppBar, IconButton, FullWidthSection } = mui;

var { Spacing } = mui.Styles;
var { StyleResizable } = mui.Mixins;

class Page extends BaseComponent {

  constructor() {
    super();
    this.state = this.getState();
    ThemeManager.setTheme(AdminTheme);
    this._onMenuIconButtonTouchTap = this._onMenuIconButtonTouchTap.bind(this);
    this.stores = [AdminStore];
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _onMenuIconButtonTouchTap() {
    AdminActions.changeNav();
    this.refs.leftNav.toggle();
  }

  getState(){
    return {
      navStatus: AdminStore.navStatus()
    };
  }

  getStyles(status){
    var marginLeft = status ? "256px" : "0px";
    var styles = {
      root: {
        paddingTop: Spacing.desktopKeylineIncrement + 'px'
      },
      content: {
        boxSizing: 'border-box',
        padding: Spacing.desktopGutter + 'px'
      },
      a: {
        color: Defines.colors.grey
      },
      p: {
        margin: "0 auto",
        padding: "0",
        color: Defines.colors.white,
        maxWidth: "335px"
      },
      appBar: {
        position: "relative"
      },
      span: {
        marginLeft: marginLeft,
        transition: "margin .3s"
      },
      iconStyle: {
        marginRight: "10px",
        marginLeft: "10px",
        color: Defines.colors.white
      }
    };

    return styles;
  }

  render(){

    var styles = this.getStyles(this.state.navStatus);
    var title = "Admin";
    var leftNav;
    var showMenuIconButton = false;
    var leftIcon;

    var currentRoute = _.last(this.context.router.getCurrentRoutes()).name;
    var noNavRoutes = ["login", "logout"];

    if(!_.contains(noNavRoutes, currentRoute)){
      showMenuIconButton = true;
      leftNav = <LeftNav ref="leftNav" docked={false} isInitiallyOpen={false} loggedIn={this.state.loggedIn} />;
      leftIcon = (
        <span style={styles.span}>
          <IconButton
            iconStyle={styles.iconStyle}
            iconClassName="material-icons-action-dehaze"
            onTouchTap={(e) => this._onMenuIconButtonTouchTap(e)}/>
        </span>
      );
    }

    return <AppCanvas predefinedLayout={1}>
        <AppBar
          onLeftIconButtonTouchTap={(e) => this._onMenuIconButtonTouchTap(e)}
          title={title}
          zDepth={0}
          style={styles.appBar}
          iconElementLeft={leftIcon}
          showMenuIconButton = {showMenuIconButton} />
        {leftNav}
        <div style={styles.root}>
          <Messages />
          <div style={styles.content}>
            <RouteHandler />
          </div>
        </div>
      </AppCanvas>;
  }
}

Page.contextTypes = {
  router: React.PropTypes.func
};

Page.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Page;
