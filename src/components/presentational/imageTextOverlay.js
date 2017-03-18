import React from 'react';

let ImageTextOverlay = (props) => {
  return (
    <div width = {props.width} className = "image-text-overlay" style = {{fontSize: props.fontSize, lineHeight: `${props.height}px`, width: props.width, backgroundImage: `url(images/${props.image})`}}>
      {props.text}
    </div>
  );
}

ImageTextOverlay.propTypes = {
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.oneOfType([
   React.PropTypes.string,
   React.PropTypes.number,
 ]).isRequired
};


ImageTextOverlay.defaultProps = {
  height: 50,
  width: 50,
  fontSize: '2rem'
}


export default ImageTextOverlay;
