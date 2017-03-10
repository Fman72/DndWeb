"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _spellSearcher = require("../searchers/spellSearcher");

var _spellSearcher2 = _interopRequireDefault(_spellSearcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Handles SEARCH_SPELL action by finding the correct spell.
function spells() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { spellList: [] };
	var action = arguments[1];

	switch (action.type) {
		case "SEARCH_SPELL":
			var newSpell = _spellSearcher2.default.search(action.spellName);
			if (newSpell) {
				return Object.assign({}, state, { currentSpell: newSpell });
			} else {
				return state;
			}
			break;
		case "ADD_SPELL":
			var addedSpellList = [].concat(_toConsumableArray(state.spellList), [action.newSpell]);
			return Object.assign({}, state, { spellList: addedSpellList });
			return state;
			break;
		case "REMOVE_SPELL":
			var removedSpellList = [].concat(_toConsumableArray(state.spellList.slice(0, action.spellIndex)), _toConsumableArray(state.spellList.slice(action.spellIndex + 1)));
			return Object.assign({}, state, { spellList: removedSpellList });
			break;
		case "REQUEST_STORE_SPELL_LIST":
			return Object.assign({}, state, { isStoringSpellList: true });
			break;
		case "RECIEVE_STORE_SPELL_LIST":
			return Object.assign({}, state, { isStoringSpellList: false });
			break;
		case "REQUEST_RETRIEVE_SPELL_LIST":
			return Object.assign({}, state, { isFetchingSpellList: true });
			break;
		case "RECIEVE_RETRIEVE_SPELL_LIST":
			return Object.assign({}, state, { isFetchingSpellList: false, spellList: action.spellList });
			break;
		case "ERROR_RETRIEVE_SPELL_LIST":
			return Object.assign({}, state, { isFetchingSpellList: false });
			break;
		default:
			return state;
	}
}

exports.default = spells;