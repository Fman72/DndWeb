'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageTextOverlay = function ImageTextOverlay(props) {
  return _react2.default.createElement(
    'div',
    { width: props.width, className: 'image-text-overlay', style: { fontSize: props.fontSize, lineHeight: props.height + 'px', width: props.width, backgroundImage: 'url(images/' + props.image + ')' } },
    props.text
  );
};

ImageTextOverlay.propTypes = {
  image: _react2.default.PropTypes.string.isRequired,
  text: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired
};

ImageTextOverlay.defaultProps = {
  height: 50,
  width: 50,
  fontSize: '2rem'
};

exports.default = ImageTextOverlay;