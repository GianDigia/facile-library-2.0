import React, { useMemo } from 'react'
import styled from 'styled-components'

import { Book, BooksFilters } from '../types'
import { filterBook } from '../utils'
import BookCard from './BookCard'
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
    <CardsWrapper>
      {filteredBooks?.map((book, key) => (
        <BookCard key={key} book={book} />
      ))}
    </CardsWrapper>
  ) : (
    <EmptyBookList />
  )
}

const CardsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
`

export default BooksList
