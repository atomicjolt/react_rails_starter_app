import Defines from "../defines";
import Styles  from "material-ui";

const ThemeManager = Styles.ThemeManager;

var DefaultRawTheme = Styles.LightRawTheme;
DefaultRawTheme.appBar.color = Defines.colors.teal;

const muiTheme = ThemeManager.getMuiTheme(DefaultRawTheme);
var adminTheme = ThemeManager.modifyRawThemePalette(muiTheme, { canvasColor: Defines.colors.lightGrey });

export default adminTheme;


//        floatingActionButton: {
//          buttonSize: 40,
//          //miniSize: Number,
//          color: Defines.colors.snow,
//          iconColor: Defines.colors.black,
//          //secondaryColor: String,
//          //secondaryIconColor: String,
//          //disabledColor: String,
//          //disabledTextColor: String
//        },
//       // leftNav: {
//       //   width: Number,
//       //   color: String,
//       // },
//       // menu: {
//       //   backgroundColor: String,
//       //   containerBackgroundColor: String,
//       // },
//        menuItem: {
//       //   dataHeight: Number,
//       //   height: Number,
//       //   hoverColor: String,
//       //   padding: Number,
//          selectedTextColor: Defines.colors.teal,
//        },
//       // menuSubheader: {
//       //   padding: Number,
//       //   borderColor: String,
//       //   textColor: String,
//       // },
//       // paper: {
//       //   backgroundColor: String,
//       // },
//       // radioButton: {
//       //   borderColor: String,
//       //   backgroundColor: String,
//       //   checkedColor: String,
//       //   requiredColor: String,
//       //   disabledColor: String,
//       //   size: Number,
//       // },
//        raisedButton: {
//       //   color: String,
//       //   textColor: String,
//          primaryColor: Defines.colors.darkGrey,
//       //   primaryTextColor: String,
//       //   secondaryColor: String,
//       //   secondaryTextColor: String,
//       //   disabledColor: String,
//       //   disabledTextColor: String
//        }
//     }
//   }
// }