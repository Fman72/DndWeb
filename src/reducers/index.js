import {combineReducers} from 'redux';
import spells from './spellReducer';

const rootReducer = combineReducers({
	spells: spells
});

export default rootReducer;
