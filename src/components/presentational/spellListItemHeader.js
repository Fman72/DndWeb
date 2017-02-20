import React from 'react';
import CrossImageButton from './crossImageButton';
import ImageButton from './imageButton';

let SpellListItemHeader = (props) =>{
  let style = {};
  if(props.isMinimized){
    style = {
      transform: "rotate(180deg)"
    }
  }

  return (
    <div className = "list-item-header" onDoubleClick = {props.toggleMinimization}>
      <span>{props.name}</span>
      <ImageButton css = {style} handleClick = {props.toggleMinimization} imageSrc = "images/down_arrow.svg"/>
      <ImageButton handleClick = {props.removeSpell} imageSrc = "images/cross.svg"/>
    </div>
  );
}

SpellListItemHeader.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default SpellListItemHeader;
