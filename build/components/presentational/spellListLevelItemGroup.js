"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpellListLevelItemGroup = function SpellListLevelItemGroup(props) {
  if (props.children && props.children.length != 0) {
    var title = "";
    if (props.level == 0) {
      title = "Cantrips";
    } else {
      title = "Level " + props.level;
    }
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h3",
        { className: "spell-level-header" },
        title
      ),
      props.children
    );
  }
  return null;
};

exports.default = SpellListLevelItemGroup;