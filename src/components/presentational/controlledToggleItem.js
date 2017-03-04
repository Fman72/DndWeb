import React from "react";

function ControlledToggleItem(props){
  return (
    <div>
      <input onChange = {props.handleChange} type = "checkbox" value = {props.value} checked = {props.isChecked}/>
      {props.name}
    </div>
  );
}

export default ControlledToggleItem;
