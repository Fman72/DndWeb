function filters(state = {filters: {}}, action)
{
	switch (action.type){
		case "ADD_FILTER":
        let newFilters = Object.assign({}, state.filters, {[action.filterName]: 1});
        console.log(newFilters);
				return Object.assign({}, state, {filters: newFilters});
			break;
		case "REMOVE_FILTER":
        let removedFilters = Object.assign({}, state.filters, {[action.filterName]: 0});
        console.log(removedFilters);
        return Object.assign({}, state, {filters: newFilters});
			break;
		default:
			return state;
	}
}

export default filters;
