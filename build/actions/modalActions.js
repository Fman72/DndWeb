"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function showModal(modalName) {
	return { type: "SHOW_MODAL", modalName: modalName };
}

function hideModal(modalName) {
	return { type: "HIDE_MODAL", modalName: modalName };
}

exports.showModal = showModal;
exports.hideModal = hideModal;