"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function addFilter(filterName) {
	return { type: "ADD_FILTER", filterName: filterName };
}

function removeFilter(filterName) {
	return { type: "REMOVE_FILTER", filterName: filterName };
}

exports.addFilter = addFilter;
exports.removeFilter = removeFilter;