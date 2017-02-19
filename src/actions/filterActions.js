function addFilter(filterName){
	return {type: "ADD_FILTER", filterName: filterName};
}

function removeFilter(filterName){
	return {type: "REMOVE_FILTER", filterName: filterName};
}

export {addFilter, removeFilter};
