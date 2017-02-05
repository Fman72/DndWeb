"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _spellSearcher = require("../spellSearcher");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Handles SEARCH_SPELL action by finding the correct spell.
function spells() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { spellList: [] };
	var action = arguments[1];

	switch (action.type) {
		case "SEARCH_SPELL":
			var newSpell = (0, _spellSearcher.searchSpell)(action.spellName);
			if (newSpell) {
				return Object.assign({}, state, { currentSpell: newSpell });
			} else {
				return state;
			}
			break;
		case "ADD_SPELL":
			if (state.spellList.map(function (spell) {
				return spell.name;
			}).indexOf(action.newSpell.name) < 0) {
				var newSpellList = [].concat(_toConsumableArray(state.spellList), [action.newSpell]);
				return Object.assign({}, state, { spellList: newSpellList });
			}
			return state;
			break;
		case "REMOVE_SPELL":
			var trimmedSpellList = [].concat(_toConsumableArray(state.spellList.slice(0, action.spellIndex)), _toConsumableArray(state.spellList.slice(action.spellIndex + 1)));
			return Object.assign({}, state, { spellList: trimmedSpellList });
			break;
		default:
			return state;
	}
}

exports.default = spells;