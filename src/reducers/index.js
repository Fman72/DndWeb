import {combineReducers} from 'redux';
import spells from './spellReducer';
import filters from './filterReducer';
import user from './userReducer';
import modals from './modalReducer';
import settings from './settingReducer';
import monsters from './monsterReducer';

const rootReducer = combineReducers({
	spells: spells,
	monsters: monsters,
	filters: filters,
	user: user,
	modals: modals,
	settings: settings
});

export default rootReducer;
