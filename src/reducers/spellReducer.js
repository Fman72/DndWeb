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
      let addedSpellList = [...state.spellList, action.newSpell];
			return Object.assign({}, state, {spellList: addedSpellList});
			return state;
			break;
		case "REMOVE_SPELL":
			let removedSpellList = [...state.spellList.slice(0, action.spellIndex), ...state.spellList.slice(action.spellIndex + 1)];
			return Object.assign({}, state, {spellList: removedSpellList});
			break;
		case "REQUEST_STORE_SPELL_LIST":
			return Object.assign({}, state, {isStoringSpellList: true});
			break;
		case "RECIEVE_STORE_SPELL_LIST":
			return Object.assign({}, state, {isStoringSpellList: false});
			break;
		case "REQUEST_RETRIEVE_SPELL_LIST":
			return Object.assign({}, state, {isFetchingSpellList: true});
			break;
		case "RECIEVE_RETRIEVE_SPELL_LIST":
			return Object.assign({}, state, {isFetchingSpellList: false, spellList: action.spellList});
			break;
		default:
			return state;
	}
}

export default spells;
