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
			var addedFilters = Object.assign({}, state, _defineProperty({}, action.filterName, true));
			console.log("Filter state " + JSON.stringify(addedFilters));
			return Object.assign({}, state, addedFilters);
			break;
		case "REMOVE_FILTER":
			var removedFilters = Object.assign({}, state, _defineProperty({}, action.filterName, false));
			console.log("Filter state " + JSON.stringify(removedFilters));
			return Object.assign({}, state, removedFilters);
			break;
		default:
			return state;
	}
}

exports.default = filters;