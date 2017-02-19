import React from "react";

function FilterToggleItem(props){
  return (
    <div>
      <input onClick = {props.toggleFilter} type = "checkbox" value = {props.value}/>
      {props.name}
    </div>
  );
}

export default FilterToggleItem;
