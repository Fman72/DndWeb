function searchSpell(spellName){
	return {type: "SEARCH_SPELL", spellName: spellName};
}

function addSpell(newSpell){
	return {type: "ADD_SPELL", newSpell: newSpell};
}

function removeSpell(spellIndex){
	return {type: "REMOVE_SPELL", spellIndex: spellIndex};
}

export {searchSpell, addSpell, removeSpell};
