import { combineReducers } from 'redux';
import currenciesReducer from './redux';

const rootReducer = combineReducers({
	currencies: currenciesReducer,
});

export default rootReducer;
