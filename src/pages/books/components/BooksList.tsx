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
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-evenly;
  grid-gap: 30px;
`

export default BooksList
