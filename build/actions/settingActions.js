"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function toggleSetting(settingName, settingValue) {
	return { type: "TOGGLE_SETTING", settingName: settingName, settingValue: settingValue };
}

exports.toggleSetting = toggleSetting;