import {searchSpell} from "../spellSearcher";
import {storeSpellBook} from '../databaseConvenienceFunctions';

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
			if(state.spellList.map(spell => spell.name).indexOf(action.newSpell.name) < 0){
	      let addedSpellList = [...state.spellList, action.newSpell];
				return Object.assign({}, state, {spellList: addedSpellList});
			}
			return state;
			break;
		case "REMOVE_SPELL":
			let removedSpellList = [...state.spellList.slice(0, action.spellIndex), ...state.spellList.slice(action.spellIndex + 1)];
			return Object.assign({}, state, {spellList: removedSpellList});
			break;
		case "STORE_SPELL_BOOK":
			storeSpellBook(state.spellList, action.user);
			return state;
		default:
			return state;
	}
}

export default spells;
