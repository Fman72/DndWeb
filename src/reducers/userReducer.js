function user(state = {username: null}, action)
{
	switch (action.type){
		case "SET_USER":
      return Object.assign({}, state, {username: action.username});
			break;
		default:
			return state;
	}
}

export default user;
