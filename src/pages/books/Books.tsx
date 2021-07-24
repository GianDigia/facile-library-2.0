import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

import LoadingPage from '../loading/LoadingPage'
import BooksHeader from './components/BooksHeader'
import useBooks from './hooks/useBooks'
import { BooksFilters } from './types'

const Books = (): JSX.Element | null => {
  const handleError = useErrorHandler()

  const [filters, setFilters] = useState<BooksFilters>({})

  const { data: books, error, isLoading } = useBooks()

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    handleError(error)
    return null
  }

  return (
    <>
      <BooksHeader filters={filters} updateFilters={updateFilters} />
      <div>
        {data?.map((book) => (
          <div key={book.id}>{book.title}</div>
        ))}
      </div>
    </>
  )
}

export default Books
