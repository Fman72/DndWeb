import React from 'react';
import CrossImageButton from './crossImageButton';

let SpellListItemHeader = (props) =>{
  return (
    <div className = "minimized-list-item" onDoubleClick = {props.handleDoubleClick}>
      <span>{props.name}</span>
      <CrossImageButton onCrossClick = {props.onCrossClick}/>
    </div>
  );
}

SpellListItemHeader.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default SpellListItemHeader;
