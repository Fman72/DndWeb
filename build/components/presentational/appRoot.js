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
                      { className: "container-fluid" },
                      _react2.default.createElement(
                                 "div",
                                 { className: "row" },
                                 _react2.default.createElement(
                                            "h1",
                                            { id: "page-title", className: "col-xs-12" },
                                            "DND 5e Spell List"
                                 )
                      ),
                      _react2.default.createElement(
                                 "div",
                                 { className: "row" },
                                 props.children
                      ),
                      _react2.default.createElement("script", { src: "bundle.js" })
           );
};

exports.default = AppRoot;