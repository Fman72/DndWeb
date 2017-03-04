function filters(state = {desc:true,
													level:true,
													class:true,
													range:true,
													casting_time:true,
													duration:true,
													concentration:true,
													school:true,
													components:true,
													ritual:true},
													action)
{
	switch (action.type){
		case "ADD_FILTER":
				return Object.assign({}, state, {[action.filterName]: true});
			break;
		case "REMOVE_FILTER":
        return Object.assign({}, state, {[action.filterName]: false});
			break;
		default:
			return state;
	}
}

export default filters;
