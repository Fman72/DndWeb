"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _configureStore = require("./store/configureStore");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialStore = window.__INITIAL_STORE__;

var store = (0, _configureStore.configureStore)(initialStore);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_router2.default, null)
), document.getElementById('page-wrapper'));