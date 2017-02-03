"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//App container object.
function AppRoot(props) {
				return _react2.default.createElement(
								"div",
								null,
								_react2.default.createElement(
												"h1",
												null,
												"Welcome to the DND App"
								),
								_react2.default.createElement(
												"div",
												{ id: "container-div" },
												props.children
								),
								_react2.default.createElement("script", { src: "bundle.js" })
				);
};

exports.default = AppRoot;