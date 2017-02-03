'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _spellReducer = require('./spellReducer');

var _spellReducer2 = _interopRequireDefault(_spellReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	spells: _spellReducer2.default
});

exports.default = rootReducer;