import React from 'react';

let PlusImageButton = (props) =>{
  return(
    <input className = "plus-image-button" type = "image" onClick = {props.onPlusClick} src= 'images/plus.svg'/>
  );
}

export default PlusImageButton;
