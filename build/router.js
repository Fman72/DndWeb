"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _appRoot = require("./components/presentational/appRoot");

var _appRoot2 = _interopRequireDefault(_appRoot);

var _spellPage = require("./components/presentational/spellPage");

var _spellPage2 = _interopRequireDefault(_spellPage);

var _StartPageContainer = require("./components/container/StartPageContainer");

var _StartPageContainer2 = _interopRequireDefault(_StartPageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
				return _react2.default.createElement(
								_reactRouter.Router,
								{ history: _reactRouter.browserHistory },
								_react2.default.createElement(
												_reactRouter.Route,
												{ path: "/", component: _appRoot2.default },
												_react2.default.createElement(_reactRouter.Route, { path: "spell", component: _spellPage2.default }),
												_react2.default.createElement(_reactRouter.Route, { path: "start", component: _StartPageContainer2.default })
								)
				);
};

exports.default = AppRouter;