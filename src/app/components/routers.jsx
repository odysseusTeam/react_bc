/**
 * Created by CHEN on 2016/1/30.
 */
import React from 'react';
import { render } from 'react-dom'
import Main from './Main'
import login from './login.jsx'
import { Router, Route, Link ,IndexRoute } from 'react-router'

export const routers =  (
    <Route path="/" component={Main}>
        <IndexRoute component={login} />
        <Route path="login" component={login}/>
    </Route>
);



