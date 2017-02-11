import React from 'react';

let CrossImageButton = (props) =>{
  return(
    <input className = "cross-image-button" type = "image" onClick = {props.onCrossClick} src= 'images/cross.svg'/>
  );
}

export default CrossImageButton;
