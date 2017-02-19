"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filters() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { filters: {} };
	var action = arguments[1];

	switch (action.type) {
		case "ADD_FILTER":
			var newFilters = Object.assign({}, state.filters, _defineProperty({}, action.filterName, 1));
			console.log(newFilters);
			return Object.assign({}, state, { filters: newFilters });
			break;
		case "REMOVE_FILTER":
			var removedFilters = Object.assign({}, state.filters, _defineProperty({}, action.filterName, 0));
			console.log(removedFilters);
			return Object.assign({}, state, { filters: newFilters });
			break;
		default:
			return state;
	}
}

exports.default = filters;