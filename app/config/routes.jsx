import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../Main'
import SplashPage from '../SplashPage'
import Home from '../Home'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage} />
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
)

module.exports = routes
