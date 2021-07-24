import React, { useCallback, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

import LoadingPage from '../loading/LoadingPage'
import BooksHeader from './components/BooksHeader'
import BooksList from './components/BooksList'
import useBooks from './hooks/useBooks'
import { BooksFilters } from './types'

const Books = (): JSX.Element | null => {
  const handleError = useErrorHandler()

  const [filters, setFilters] = useState<BooksFilters>({})

  const updateFilters = useCallback(
    (newFilters: BooksFilters) =>
      setFilters((filters) => ({ ...filters, ...newFilters })),
    []
  )

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
      {books && <BooksList filters={filters} books={books} />}
    </>
  )
}

export default Books
