"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilterToggleItem(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("input", { onChange: props.toggleFilter, type: "checkbox", value: props.value, checked: props.isChecked }),
    props.name
  );
}

exports.default = FilterToggleItem;