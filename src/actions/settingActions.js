function toggleSetting(settingName, settingValue){
	return {type: "TOGGLE_SETTING", settingName: settingName, settingValue: settingValue};
}

export {toggleSetting};
