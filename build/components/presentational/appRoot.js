"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _configureStore = require("../../store/configureStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//App container object.
function AppRoot(props) {
    return _react2.default.createElement(
        "div",
        null,
        props.children
    );
};

exports.default = AppRoot;