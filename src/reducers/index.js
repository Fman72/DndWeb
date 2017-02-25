import {combineReducers} from 'redux';
import spells from './spellReducer';
import filters from './filterReducer';
import user from './userReducer';
import modals from './modalReducer';

const rootReducer = combineReducers({
	spells: spells,
	filters: filters,
	user: user,
	modals: modals
});

export default rootReducer;
