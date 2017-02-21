function filters(state = {filters: {desc:true,
																		level:true,
																		class:true,
																		range:true,
																		casting_time:true,
																		duration:true,
																		concentration:true,
																		school:true,
																		components:true,
																		ritual:true}},
																		action)
{
	switch (action.type){
		case "ADD_FILTER":
        let addedFilters = Object.assign({}, state.filters, {[action.filterName]: true});
        console.log("Filter state " + JSON.stringify(addedFilters));
				return Object.assign({}, state, {filters: addedFilters});
			break;
		case "REMOVE_FILTER":
        let removedFilters = Object.assign({}, state.filters, {[action.filterName]: false});
        console.log("Filter state " + JSON.stringify(removedFilters));
        return Object.assign({}, state, {filters: removedFilters});
			break;
		default:
			return state;
	}
}

export default filters;
