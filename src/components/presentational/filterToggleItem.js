import React from "react";

function FilterToggleItem(props){
  return (
    <div>
      <input onChange = {props.toggleFilter} type = "checkbox" value = {props.value} checked = {props.isChecked}/>
            {props.name}
    </div>
  );
}

export default FilterToggleItem;
