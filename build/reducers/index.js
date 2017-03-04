'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _spellReducer = require('./spellReducer');

var _spellReducer2 = _interopRequireDefault(_spellReducer);

var _filterReducer = require('./filterReducer');

var _filterReducer2 = _interopRequireDefault(_filterReducer);

var _userReducer = require('./userReducer');

var _userReducer2 = _interopRequireDefault(_userReducer);

var _modalReducer = require('./modalReducer');

var _modalReducer2 = _interopRequireDefault(_modalReducer);

var _settingReducer = require('./settingReducer');

var _settingReducer2 = _interopRequireDefault(_settingReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	spells: _spellReducer2.default,
	filters: _filterReducer2.default,
	user: _userReducer2.default,
	modals: _modalReducer2.default,
	settings: _settingReducer2.default
});

exports.default = rootReducer;