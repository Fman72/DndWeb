"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ControlledToggleItem(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("input", { onChange: props.handleChange, type: "checkbox", value: props.value, checked: props.isChecked }),
    props.name
  );
}

exports.default = ControlledToggleItem;