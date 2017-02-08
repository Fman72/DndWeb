import React from 'react';

let CrossImageButton = (props) =>{
  return(
    <input type = "image" onClick = {props.onCrossClick} src= 'images/cross.svg'/>
  );
}

export default CrossImageButton;
