function settings(state = {
                            orderSpellsByLevel: true
                          }, action)
{
	switch (action.type){
		case "TOGGLE_SETTING":
        console.log(JSON.stringify(Object.assign({}, state, {[action.settingName]: action.settingValue})));
        return Object.assign({}, state, {[action.settingName]: action.settingValue});
			break;
		default:
			return state;
	}
}

export default settings;
