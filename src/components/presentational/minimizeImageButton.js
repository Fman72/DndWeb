import React from 'react';

let MinimizeImageButton = (props) =>{
  return(
    <input className = "cross-image-button" type = "image" onClick = {props.onCrossClick} src= 'images/cross.svg'/>
  );
}

export default MinimizeImageButton;
