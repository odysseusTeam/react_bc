










/**
 * Created by CHEN on 2016/1/28.
 */


import React from 'react';
import { render } from 'react-dom'
import DevTools from './constants/DevTools'
import master from './components/master'
import login from './components/login'

import register from './components/register'
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
        <Route path="/" component={master}>
            <IndexRoute component={Home}/>

        <Route path="login" component={login}/>
        <Route path="register" component={register}/>
            </Route>
    </Router>
    </Provider>
    ,document.getElementById('app'));
