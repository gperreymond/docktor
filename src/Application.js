/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './styles/_global.css'

import Admin from './pages/Admin'
import NoMatch from './pages/NoMatch'

const Application = () => (
  <Router>
    <Switch>
      <Route exact path="/admin/:container" component={Admin} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default Application
