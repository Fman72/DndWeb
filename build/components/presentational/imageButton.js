"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageButton = function ImageButton(props) {
  return _react2.default.createElement("input", { style: props.css, className: "image-button", type: "image", onClick: props.handleClick, src: "images/" + props.imageSrc + ".svg" });
};

exports.default = ImageButton;