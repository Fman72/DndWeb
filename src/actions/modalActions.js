function showModal(modalName){
	return {type: "SHOW_MODAL", modalName: modalName};
}

function hideModal(modalName){
	return {type: "HIDE_MODAL", modalName: modalName};
}

export {showModal, hideModal};
