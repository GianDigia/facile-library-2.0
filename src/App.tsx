import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

const App = (): JSX.Element => (
  <Router>
    <Navbar />

    <Switch>
      <Route path='/about'>
        <div>About</div>
      </Route>
      <Route path='/books'>
        <div>Books</div>
      </Route>
      <Route path='/'>
        <div>Home</div>
      </Route>
    </Switch>
  </Router>
)

export default App
