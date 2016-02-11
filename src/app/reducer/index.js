/**
 * Created by CHEN on 2016/2/6.
 */
import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
    loginReducer,
});

export default rootReducer;
