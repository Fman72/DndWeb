function searchSpell(spellName){
	return {type: "SEARCH_SPELL", spellName: spellName};
}

function addSpell(newSpell){
	return {type: "ADD_SPELL", newSpell: newSpell};
}

export {searchSpell, addSpell};
