/**
 * Created by CHEN on 2016/2/6.
 */
import { applyMiddleware, createStore ,compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from '../reducer/index';


export default (initialState) => {
    const store = compose(
        applyMiddleware(
            thunk,
            createLogger()
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, initialState);

    return store;};