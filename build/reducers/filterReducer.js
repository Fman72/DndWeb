"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filters() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { desc: true,
		level: true,
		class: true,
		range: true,
		casting_time: true,
		duration: true,
		concentration: true,
		school: true,
		components: true,
		ritual: true };
	var action = arguments[1];

	switch (action.type) {
		case "ADD_FILTER":
			return Object.assign({}, state, _defineProperty({}, action.filterName, true));
			break;
		case "REMOVE_FILTER":
			return Object.assign({}, state, _defineProperty({}, action.filterName, false));
			break;
		default:
			return state;
	}
}

exports.default = filters;