"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modals() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case "SHOW_MODAL":
			return Object.assign({}, state, _defineProperty({}, action.modalName, true));
			break;
		case "HIDE_MODAL":
			return Object.assign({}, state, _defineProperty({}, action.modalName, false));
			break;
		default:
			return state;
	}
}

exports.default = modals;