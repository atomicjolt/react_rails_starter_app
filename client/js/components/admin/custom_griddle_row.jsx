"use strict";

import React            from "react";
import AccountsStore    from "../../stores/accounts";
import BaseComponent    from "../base_component";
import AdminActions     from "../../actions/admin";
import Defines          from "../defines";
import Expandable       from "./expandable";

class CustomGriddleRow extends React.Component {
  constructor(props){
    super(props);
    this.toggleExpandable.bind(this);
  }


  getStyles(metadata){
    metadata = metadata[1];

    if(metadata.styles){
      if(metadata.styles.row)
        return metadata.styles;
    }
    return {
      row: {
        height: "60px"
      }
    };
  }

  getWrapperStyles(){
    return {
      wrapper:{
        display: "table-row",
        width: "100%"
      }
    }
  }

  toggleExpandable(){
    this.refs.expandable.toggle();
  }

  checkCustomComponent(index, customComponents){
    if(!customComponents) return -1;
    for(var i=0; i<customComponents.length; i++){
      if(!customComponents[i].colId){
        console.warn("You must include a valid column id in your customComponent object")
        return -1;
      }
      if(customComponents[i].colId == index + 1){
        return i;
      }
    }
    return -1;
  }

  getData(data, metadata){
    metadata = metadata[1];
    var useDefaultStyles = false;
    var useDisplayNames = true;
    var tableData = <div />;

    if(!metadata.columnNames){
      console.warn("You must include a columnNames property in the object to you pass to metadataColumns.");
      return tableData;
    }

    if(!metadata.displayNames){
      useDisplayNames = false
    } 

    var tableData = metadata.columnNames.map((name, index)=>{   
      var style = useDefaultStyles ? this.getStyles().row : metadata.styles[name];
      var customIndex = this.checkCustomComponent(index, metadata.customComponents)
      if(customIndex >= 0){
        var Content;
        if(typeof metadata.customComponents[customIndex].component === "object"){
          Content = metadata.customComponents[customIndex].component;
        } else if (typeof metadata.customComponents[customIndex].component === "function"){
          var Custom = metadata.customComponents[customIndex].component;
          Content = <Custom data={data} toggleExpandable={() => {this.toggleExpandable()}} metadata={metadata} styles={metadata.styles}/>
        }
        return <div key={name+index} style={{...{display: "inline-block"}, ...style}}>{Content}</div>
      } else {
        return <div key={name+index} style={{...{display: "inline-block"}, ...style}}>{data[name]}</div>
      }
    });
    return tableData;
  }

  render(){
    var styles = this.getStyles(this.props.metadataColumns);
    var wrapperStyle = this.getWrapperStyles();
    var data = this.getData(this.props.data, this.props.metadataColumns);
    return (
      <div>
        <span style={{...wrapperStyle.wrapper, ...styles.row}}>
          {data}
        </span>
        <span>
          <Expandable ref="expandable">{this.props.metadataColumns[1].expandableContent}</Expandable>
        </span>
      </div>
      );
  }
}

CustomGriddleRow.propTypes = {
  data: React.PropTypes.object.isRequired,
}

CustomGriddleRow.defaultProps = {data: {}};
module.exports = CustomGriddleRow;