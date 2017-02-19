"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Displays data
function DataRow(props) {
  return props.name && props.value && _react2.default.createElement(
    "span",
    { className: (props.name + "-cell").toLowerCase() },
    _react2.default.createElement(
      "b",
      null,
      props.name
    ),
    ": ",
    props.value,
    " ",
    props.addBreak && _react2.default.createElement("br", null)
  );
};

DataRow.propTypes = {
  addBreak: _react2.default.PropTypes.bool,
  name: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.string.isRequired
};

DataRow.defaultProps = {
  addBreak: false
};

exports.default = DataRow;