"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Displays data
function DataRow(props) {
      return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
                  "span",
                  null,
                  props.name,
                  ": "
            ),
            _react2.default.createElement(
                  "span",
                  null,
                  props.value
            ),
            _react2.default.createElement("br", null)
      );
};

exports.default = DataRow;