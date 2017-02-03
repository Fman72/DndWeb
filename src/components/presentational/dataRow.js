import React from "react";

//Displays data
function DataRow(props){
      return (
          <span>
                <span>{props.name}: </span><span>{props.value}</span>
                <br/>
          </span>
      );
};


export default DataRow;
