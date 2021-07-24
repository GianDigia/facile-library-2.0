import React, { useMemo } from 'react'

import { Book, BooksFilters } from '../types'
import { filterBook } from '../utils'
import EmptyBookList from './EmptyBookList'

interface Props {
  filters: BooksFilters
  books: Book[]
}

const BooksList = ({ books, filters }: Props): JSX.Element => {
  const filteredBooks = useMemo(
    () => books.filter((book) => filterBook(book, filters)),
    [books, filters]
  )

  return filteredBooks.length ? (
    <div>
      {filteredBooks?.map((book) => (
        <div key={book.id}>
          {book.title} - {book.author}
        </div>
      ))}
    </div>
  ) : (
    <EmptyBookList />
  )
}

export default BooksList
