import React from 'react'
import { useErrorHandler } from 'react-error-boundary'

import LoadingPage from '../loading/LoadingPage'
import useBooks from './hooks/useBooks'

const Books = (): JSX.Element | null => {
  const handleError = useErrorHandler()

  const { data, error, isLoading } = useBooks()

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    handleError(error)
    return null
  }

  return (
    <>
      <h1>Books</h1>
      <div>
        {data?.map((book) => (
          <div key={book.id}>{book.title}</div>
        ))}
      </div>
    </>
  )
}

export default Books
