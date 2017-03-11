import monsterSearcher from "~/searchers/monsterSearcher";

function monsters(state = {monsterList: []}, action)
{
	switch (action.type){
    case "SEARCH_MONSTER":
      let newMonster = monsterSearcher.search(action.monsterName);
      if(newMonster){
        console.log(JSON.stringify(state));
        return Object.assign({}, state, {currentMonster: newMonster});
      }
      else{
        return state;
      }
      break;
		case "ADD_MONSTER":
      let addedMonsterList = [...state.monsterList, action.newMonster];
      return Object.assign({}, state, {monsterList: addedMonsterList});
      console.log(JSON.stringify(state));
      break;
		case "REMOVE_MONSTER":
      let removedMonsterList = [...state.monsterList.slice(0, action.monsterIndex), ...state.monsterList.slice(action.monsterIndex + 1)];
      return Object.assign({}, state, {monsterList: removedMonsterList});
			break;
		default:
			return state;
	}
}

export default monsters;
