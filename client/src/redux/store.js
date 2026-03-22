import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import concerts from './concertsRedux';
import seats from './seatsRedux';

const rootReducer = combineReducers({
	concerts,
	seats,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
