"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlusImageButton = function PlusImageButton(props) {
  return _react2.default.createElement("input", { className: "plus-image-button", type: "image", onClick: props.onPlusClick, src: "images/plus.svg" });
};

exports.default = PlusImageButton;