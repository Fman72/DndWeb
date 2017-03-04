import React from 'react';

let SpellListLevelItemGroup = (props) =>{
  if(props.children && props.children.length != 0){
    let title = "";
    if(props.level == 0){
      title = "Cantrips"
    }
    else{
      title = `Level ${props.level}`
    }
    return (
      <div>
        <h3 className = "spell-level-header">{title}</h3>
        {props.children}
      </div>
    );
  }
  return null;
}

export default SpellListLevelItemGroup;
