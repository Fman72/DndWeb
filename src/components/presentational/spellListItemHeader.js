import React from 'react';
import CrossImageButton from './crossImageButton';
import ImageButton from './imageButton';

let SpellListItemHeader = (props) =>{
  let style;
  console.log("Beofre if");
  if(props.isMinimized){
    let style = {
      transform: "rotate(180deg)"
    };
    console.log(style.transform);
  }

  return (
    <div className = "minimized-list-item" onDoubleClick = {props.toggleMinimization}>
      <span>{props.name}</span>
      <ImageButton style = {style} handleClick = {props.toggleMinimization} imageSrc = "images/down_arrow.svg"/>
      <ImageButton handleClick = {props.removeSpell} imageSrc = "images/cross.svg"/>
    </div>
  );
}

SpellListItemHeader.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default SpellListItemHeader;
