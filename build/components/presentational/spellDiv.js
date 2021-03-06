"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dataDiv = require("./dataDiv");

var _dataDiv2 = _interopRequireDefault(_dataDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpellDiv(props) {
  var spellCopy = Object.assign({}, props.spell);
  if (spellCopy.level == 0) {
    spellCopy.level = "Cantrip";
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_dataDiv2.default, { objectToDisplay: spellCopy, hiddenProps: props.filters, positionedProps: ['name', 'description'] })
  );
}

exports.default = SpellDiv;