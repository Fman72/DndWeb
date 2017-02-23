"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartPage = function StartPage(props) {
  return _react2.default.createElement(
    "div",
    { id: "start-div" },
    _react2.default.createElement(
      "h1",
      { id: "start-heading" },
      "What is your name?"
    ),
    _react2.default.createElement("input", { className: "styled-input", id: "start-input", type: "text" }),
    _react2.default.createElement("script", { src: "bundle.js" })
  );
};

exports.default = StartPage;