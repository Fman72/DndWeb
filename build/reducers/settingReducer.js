"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function settings() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		orderSpellsByLevel: true
	};
	var action = arguments[1];

	switch (action.type) {
		case "TOGGLE_SETTING":
			console.log(JSON.stringify(Object.assign({}, state, _defineProperty({}, action.settingName, action.settingValue))));
			return Object.assign({}, state, _defineProperty({}, action.settingName, action.settingValue));
			break;
		default:
			return state;
	}
}

exports.default = settings;