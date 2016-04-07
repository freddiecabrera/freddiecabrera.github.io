import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../Main'
import SplashPage from '../SplashPage'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage} />
    </Route>
  </Router>
)

module.exports = routes
