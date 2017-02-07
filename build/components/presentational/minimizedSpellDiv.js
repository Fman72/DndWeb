"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MinimizedSpellDiv = function MinimizedSpellDiv(props) {
  return _react2.default.createElement(
    "div",
    { className: "minimized-spell-div", onDoubleClick: props.handleDoubleClick },
    _react2.default.createElement(
      "span",
      null,
      props.name
    ),
    " ",
    _react2.default.createElement("input", { type: "image", onClick: props.onCrossClick, src: "images/cross.svg" })
  );
};

MinimizedSpellDiv.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};

exports.default = MinimizedSpellDiv;