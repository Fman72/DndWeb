'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _spellReducer = require('./spellReducer');

var _spellReducer2 = _interopRequireDefault(_spellReducer);

var _filterReducer = require('./filterReducer');

var _filterReducer2 = _interopRequireDefault(_filterReducer);

var _modalReducer = require('./modalReducer');

var _modalReducer2 = _interopRequireDefault(_modalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	spells: _spellReducer2.default,
	filters: _filterReducer2.default,
	modals: _modalReducer2.default
});

exports.default = rootReducer;