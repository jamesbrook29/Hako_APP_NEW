import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import LoginReducer from './LoginReducer'
import ForgotPasswordReducer from './ForgotPasswordReducer'
import SignupReducer from './SignupReducer'
const AppReducers = combineReducers({
    LoginReducer,
    ForgotPasswordReducer,
    SignupReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;