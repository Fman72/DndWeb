"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function filters() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["page", "material", "patrons", "archetype", "domains"];
	var action = arguments[1];

	switch (action.type) {
		case "ADD_FILTER":
			return [].concat(_toConsumableArray(state), [action.filterName]);
			break;
		case "REMOVE_FILTER":
			var filterIndex = state.indexOf(action.filterName);
			return [].concat(_toConsumableArray(state.slice(0, filterIndex)), _toConsumableArray(state.slice(filterIndex + 1)));
			break;
		default:
			return state;
	}
}

exports.default = filters;