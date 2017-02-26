'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.configureStore = exports.store = undefined;

var _redux = require('redux');

var _index = require('../reducers/index');

var _index2 = _interopRequireDefault(_index);

var _reduxImmutableStateInvariant = require('redux-immutable-state-invariant');

var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
	return (0, _redux.createStore)(_index2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()));
};

var store = configureStore();

exports.store = store;
exports.configureStore = configureStore;