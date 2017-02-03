import {searchSpell} from "../spellSearcher";

//Handles SEARCH_SPELL action by finding the correct spell.
function spells(state = {spellList: []}, action)
{
	switch (action.type){
		case "SEARCH_SPELL":
			let newSpell = searchSpell(action.spellName);
			if(newSpell){
				return Object.assign({}, state, {currentSpell: newSpell});
			}
			else{
				return state;
			}
			break;
		case "ADD_SPELL":
        let newSpellList = [...state.spellList, action.newSpell];
				return Object.assign({}, state, {spellList: newSpellList});
			return;
			break;
		default:
			return state;
	}
}

export default spells;
