"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filters() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { modals: {} };
	var action = arguments[1];

	switch (action.type) {
		case "SHOW_MODAL":
			var shownModalState = Object.assign({}, state.modals, _defineProperty({}, action.modalName, true));
			console.log("Modal state " + JSON.stringify(shownModalState));
			return Object.assign({}, state, shownModalState);
			break;
		case "HIDE_MODAL":
			var hiddenModalState = Object.assign({}, state.modals, _defineProperty({}, action.modalName, false));
			console.log("Modal state " + JSON.stringify(hiddenModalState));
			return Object.assign({}, state, hiddenModalState);
			break;
		default:
			return state;
	}
}

exports.default = filters;