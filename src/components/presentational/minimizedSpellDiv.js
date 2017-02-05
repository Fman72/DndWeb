import React from 'react';

let MinimizedSpellDiv = (props) =>{
  return (
    <div onDoubleClick = {props.handleDoubleClick}><span>{props.name}</span></div>
  );
}

MinimizedSpellDiv.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default MinimizedSpellDiv;
