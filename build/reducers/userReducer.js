"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function user() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { username: null };
	var action = arguments[1];

	switch (action.type) {
		case "SET_USER":
			return Object.assign({}, state, { username: action.username });
			break;
		default:
			return state;
	}
}

exports.default = user;