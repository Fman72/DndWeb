function modals(state = {}, action)
{
	switch (action.type){
		case "SHOW_MODAL":
				return Object.assign({}, state, {[action.modalName]: true});
			break;
		case "HIDE_MODAL":
        return Object.assign({}, state, {[action.modalName]: false});
			break;
		default:
			return state;
	}
}

export default modals;
