import React from 'react';

let ImageButton = (props) =>{
  return(
    <input style = {props.style} className = "image-button" type = "image" onClick = {props.handleClick} src= {props.imageSrc}/>
  );
}

export default ImageButton;
