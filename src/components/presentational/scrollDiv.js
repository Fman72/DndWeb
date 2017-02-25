import React from 'react';


let ScrollDiv = (props) => {
  let style = {};
  if (props.scrollHeight){
    style = {
      top: props.scrollHeight
    };
  }

  return (
    <div className = "scroll-div" style = {style}>
      {props.children}
    </div>
  );
}

export default ScrollDiv;
