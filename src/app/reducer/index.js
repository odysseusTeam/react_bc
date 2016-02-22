/**
 * Created by CHEN on 2016/2/6.
 */
import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import mainReducer from './MainReducer';
const rootReducer = combineReducers({
    loginReducer,mainReducer,
});

export default rootReducer;
