import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Pages from './components/routing/Pages'

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />

      <Pages />
    </Router>
  )
}

export default App
