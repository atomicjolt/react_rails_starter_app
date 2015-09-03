import Defines from "../defines";

export default class AdminTheme{
  
  static getPalette(){
    return {
      // primary1Color: String,
      // primary2Color: String,
      // primary3Color: String,
      // accent1Color: String,
      // accent2Color: String,
      // accent3Color: String,
      // textColor: String,
      canvasColor: Defines.colors.lightGrey
      // borderColor: String,
      // disabledColor: String
    };
  }
  
  static getComponentThemes(){
    return {
      appBar: {
        color: Defines.colors.teal
        // textColor: String,
        // height: Number
      },
      // button: {
      //   height: Number,
      //   minWidth: Number,
      //   iconButtonSize: Number
      // },
      // checkbox: {
      //   boxColor: String,
      //   checkedColor: String,
      //   requiredColor: String,
      //   disabledColor: String
      // },
      // datePicker: {
      //   color: String,
      //   textColor: String,
      //   calendarTextColor: String,
      //   selectColor: String,
      //   selectTextColor: String,
      // },
      // dropDownMenu: {
      //   accentColor: Defines.colors.black
      // },
      // flatButton: {
      //   color: String,
      //   textColor: String,
      //   primaryTextColor: String,
      //   secondaryTextColor: String,
      //   disabledColor: String
      // },
       floatingActionButton: {
         buttonSize: 40,
         //miniSize: Number,
         color: Defines.colors.snow,
         iconColor: Defines.colors.black,
         //secondaryColor: String,
         //secondaryIconColor: String,
         //disabledColor: String,
         //disabledTextColor: String
       },
      // leftNav: {
      //   width: Number,
      //   color: String,
      // },
      // menu: {
      //   backgroundColor: String,
      //   containerBackgroundColor: String,
      // },
       menuItem: {
      //   dataHeight: Number,
      //   height: Number,
      //   hoverColor: String,
      //   padding: Number,
         selectedTextColor: Defines.colors.teal,
       },
      // menuSubheader: {
      //   padding: Number,
      //   borderColor: String,
      //   textColor: String,
      // },
      // paper: {
      //   backgroundColor: String,
      // },
      // radioButton: {
      //   borderColor: String,
      //   backgroundColor: String,
      //   checkedColor: String,
      //   requiredColor: String,
      //   disabledColor: String,
      //   size: Number,
      // },
       raisedButton: {
      //   color: String,
      //   textColor: String,
         primaryColor: Defines.colors.darkGrey,
      //   primaryTextColor: String,
      //   secondaryColor: String,
      //   secondaryTextColor: String,
      //   disabledColor: String,
      //   disabledTextColor: String
       }
    }
  }
}