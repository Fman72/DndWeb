"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function searchSpell(spellName) {
	return { type: "SEARCH_SPELL", spellName: spellName };
}

function addSpell(newSpell) {
	return { type: "ADD_SPELL", newSpell: newSpell };
}

exports.searchSpell = searchSpell;
exports.addSpell = addSpell;