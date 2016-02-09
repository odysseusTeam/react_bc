/**
 * Created by CHEN on 2016/1/28.
 */


import React from 'react';
import { render } from 'react-dom'
import DevTools from './constants/DevTools'
import Main from './components/Main'
import login from './components/login'
import Home from './components/Home'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import createStore from './store/stores'
let store = createStore();

render(
<Provider store={store}>
    <Router>
        <Route  path="/" component={login}>
            <Route path="login" component={login}/>
        </Route>
    </Router>
    </Provider>
    ,document.getElementById('app'));
