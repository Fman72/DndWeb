import React from 'react';
import ImageButton from './imageButton';

let SpellListItemHeader = (props) =>{
  let style = {};
  if(props.isArrowRotated){
    style = {
      transform: "rotate(180deg)"
    }
  }

  return (
    <div className = "list-item-header" onDoubleClick = {props.toggleMinimization}>
      <span>{props.name}</span>
      <ImageButton css = {style} handleClick = {props.toggleMinimization} imageSrc = "down_arrow"/>
      <ImageButton handleClick = {props.removeSpell} imageSrc = "cross"/>
    </div>
  );
}

SpellListItemHeader.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default SpellListItemHeader;
