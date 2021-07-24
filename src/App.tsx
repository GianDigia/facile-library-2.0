import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Pages from './components/routing/Pages'
import ErrorPage from './pages/error/ErrorPage'

const App = (): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />

          <Pages />
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
