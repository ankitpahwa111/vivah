import authReducer from './authReducer';
import { combineReducers } from 'redux';
import matchReducer from './matchReducer'
const rootReducer = combineReducers({
    auth: authReducer,
    matches : matchReducer
})
export default rootReducer;