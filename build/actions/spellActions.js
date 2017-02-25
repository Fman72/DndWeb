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

function removeSpell(spellIndex) {
	return { type: "REMOVE_SPELL", spellIndex: spellIndex };
}

function storeSpellBook(user) {
	return { type: "STORE_SPELL_BOOK", user: user };
}

exports.searchSpell = searchSpell;
exports.addSpell = addSpell;
exports.removeSpell = removeSpell;
exports.storeSpellBook = storeSpellBook;