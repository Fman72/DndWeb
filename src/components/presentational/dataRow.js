import React from "react";
import {beautifyString} from '~/util';

//Displays data
function DataRow(props){
      return (
          (!props.value == "" && props.name && props.value && <span className = {(props.name + "-cell").toLowerCase()}><b>{beautifyString(props.name)}</b>: {props.value} {props.addBreak && <br/>}</span>)
      );
};

DataRow.propTypes = {
  addBreak: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
   React.PropTypes.string,
   React.PropTypes.number,
 ]).isRequired
};

DataRow.defaultProps = {
  addBreak: false
}

export default DataRow;
