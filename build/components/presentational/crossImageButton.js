'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CrossImageButton = function CrossImageButton(props) {
  return _react2.default.createElement('input', { type: 'image', onClick: props.onCrossClick, src: 'images/cross.svg' });
};

exports.default = CrossImageButton;