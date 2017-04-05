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

var _startPageContainer = require("./components/container/startPageContainer");

var _startPageContainer2 = _interopRequireDefault(_startPageContainer);

var _monsterPage = require("./components/presentational/monsterPage");

var _monsterPage2 = _interopRequireDefault(_monsterPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
													return _react2.default.createElement(
																										_reactRouter.Router,
																										{ history: _reactRouter.browserHistory },
																										_react2.default.createElement(
																																							_reactRouter.Route,
																																							{ path: "/", component: _appRoot2.default },
																																							_react2.default.createElement(_reactRouter.Route, { path: "spells", component: _spellPage2.default }),
																																							_react2.default.createElement(_reactRouter.Route, { path: "start", component: _startPageContainer2.default }),
																																							_react2.default.createElement(_reactRouter.Route, { path: "monsters", component: _monsterPage2.default })
																										)
													);
};

exports.default = AppRouter;