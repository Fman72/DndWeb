import {combineReducers} from 'redux';
import spells from './spellReducer';
import filters from './filterReducer';
import modals from './modalReducer';

const rootReducer = combineReducers({
	spells: spells,
	filters: filters,
	modals: modals
});

export default rootReducer;
