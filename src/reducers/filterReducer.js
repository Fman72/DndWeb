function filters(state = ["page", "material", "patrons", "archetype", "domains"], action){
	switch (action.type){
		case "ADD_FILTER":
				return [...state, action.filterName];
			break;
		case "REMOVE_FILTER":
				let filterIndex = state.indexOf(action.filterName);
				return [...state.slice(0, filterIndex), ...state.slice(filterIndex + 1)];
			break;
		default:
			return state;
	}
}

export default filters;
