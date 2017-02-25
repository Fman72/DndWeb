function modals(state = {modals: {}}, action)
{
	switch (action.type){
		case "SHOW_MODAL":
        let shownModalState = Object.assign({}, state.modals, {[action.modalName]: true});
        console.log("Modal state " + JSON.stringify(shownModalState));
				return Object.assign({}, state, shownModalState);
			break;
		case "HIDE_MODAL":
        let hiddenModalState = Object.assign({}, state.modals, {[action.modalName]: false});
        console.log("Modal state " + JSON.stringify(hiddenModalState));
        return Object.assign({}, state, hiddenModalState);
			break;
		default:
			return state;
	}
}

export default modals;
