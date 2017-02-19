import {combineReducers} from 'redux';
import spells from './spellReducer';
import filters from './filterReducer';

const rootReducer = combineReducers({
	spells: spells,
	filters: filters
});

export default rootReducer;
