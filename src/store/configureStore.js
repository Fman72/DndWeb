import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

function configureStore(initialState){
	return createStore(
		rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant())
	);
};

const store = configureStore();

export {store, configureStore};
