/**
 * Created by CHEN on 2016/1/28.
 */


import React from 'react';
import { render } from 'react-dom'
import DevTools from './constants/DevTools'
import Main from './components/Main'
import login from './components/login'
import Home from './components/Home'
import { Router, Route, Link,IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createStore from './store/stores'
import createHistory from 'history/lib/createHashHistory'
let store = createStore();

let history = createHistory({
    queryKey: false,

});
render(
<Provider store={store}>
    <Router  history={history} >
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>

        <Route path="login" component={login}/>
            </Route>
    </Router>
    </Provider>
    ,document.getElementById('app'));
