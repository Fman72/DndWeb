"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilterToggleItem(props) {
  var checkValue = "";
  if (props.checked) {
    checkValue = "checked";
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("input", { onClick: props.toggleFilter, type: "checkbox", value: props.value, checked: checkValue }),
    props.name
  );
}

exports.default = FilterToggleItem;