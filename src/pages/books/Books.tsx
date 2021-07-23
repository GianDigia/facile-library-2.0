import React from 'react'

import LoadingPage from '../loading/LoadingPage'
import useBooks from './hooks/useBooks'

const Books = (): JSX.Element => {
  const { data, error, isLoading } = useBooks()

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    return <div>An error has occurred: {JSON.stringify(error)}</div>
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
