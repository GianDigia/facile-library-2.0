import React, { Dispatch, SetStateAction, useMemo } from 'react'
import styled from 'styled-components'

import { Book, BooksFilters, selectedBookIdType } from '../types'
import { filterBook } from '../utils'
import BookCard from './BookCard'
import EmptyBookList from './EmptyBookList'

interface Props {
  filters: BooksFilters
  books: Book[]
  setSelectedBookId: Dispatch<SetStateAction<selectedBookIdType>>
}

const BooksList = ({
  books,
  filters,
  setSelectedBookId,
}: Props): JSX.Element => {
  const filteredBooks = useMemo(
    () => books.filter((book) => filterBook(book, filters)),
    [books, filters]
  )

  return filteredBooks.length ? (
    <CardsWrapper>
      {filteredBooks?.map((book, key) => (
        <BookCard key={key} book={book} setSelectedBookId={setSelectedBookId} />
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
