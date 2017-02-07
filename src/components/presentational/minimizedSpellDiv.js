import React from 'react';

let MinimizedSpellDiv = (props) =>{
  return (
    <div className = "minimized-spell-div" onDoubleClick = {props.handleDoubleClick}><span>{props.name}</span> <input type = "image" onClick = {props.onCrossClick} src= 'images/cross.svg'/></div>
  );
}

MinimizedSpellDiv.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default MinimizedSpellDiv;
