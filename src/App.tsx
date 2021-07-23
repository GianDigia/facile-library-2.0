import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Pages from './components/routing/Pages'

const App = (): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />

        <Pages />
      </Router>
    </QueryClientProvider>
  )
}

export default App
