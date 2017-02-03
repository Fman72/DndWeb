"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _appRoot = require("./components/presentational/appRoot");

var _appRoot2 = _interopRequireDefault(_appRoot);

var _SpellPage = require("./components/container/SpellPage");

var _SpellPage2 = _interopRequireDefault(_SpellPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
				return _react2.default.createElement(
								_reactRouter.Router,
								{ history: _reactRouter.browserHistory },
								_react2.default.createElement(
												_reactRouter.Route,
												{ path: "/", component: _appRoot2.default },
												_react2.default.createElement(_reactRouter.Route, { path: "spell", component: _SpellPage2.default })
								)
				);
};

exports.default = AppRouter;