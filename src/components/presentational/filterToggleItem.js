import React from "react";

function FilterToggleItem(props){
let checkValue = "";
  if(props.checked){
    checkValue = "checked";
  }
  return (
    <div>
      <input onClick = {props.toggleFilter} type = "checkbox" value = {props.value} checked = {checkValue}/>
      {props.name}
    </div>
  );
}

export default FilterToggleItem;
