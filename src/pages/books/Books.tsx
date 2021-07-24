import React, { useCallback, useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

import LoadingPage from '../loading/LoadingPage'
import BookModal from './components/BookModal'
import BooksHeader from './components/BooksHeader'
import BooksList from './components/BooksList'
import useBooks from './hooks/useBooks'
import { BooksFilters, selectedBookIdType } from './types'

const Books = (): JSX.Element | null => {
  const handleError = useErrorHandler()

  const [filters, setFilters] = useState<BooksFilters>({})

  const [selectedBookId, setSelectedBookId] = useState<selectedBookIdType>(null)
  const resetSelectedBookId = useCallback(() => setSelectedBookId(null), [])

  const [isOpen, setIsOpen] = useState(false)
  const closeModal = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    selectedBookId && setIsOpen(true)
  }, [selectedBookId])

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
      {books && (
        <>
          <BooksList
            setSelectedBookId={setSelectedBookId}
            filters={filters}
            books={books}
          />
          {selectedBookId && (
            <BookModal
              onAfterClose={resetSelectedBookId}
              bookId={selectedBookId}
              isOpen={isOpen}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </>
  )
}

export default Books
