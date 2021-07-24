
import '@testing-library/jest-dom'

import React from "react";
import {render, screen} from '@testing-library/react'
import BooksList from "../pages/books/components/BooksList";
import { Book, BooksFilters } from "../pages/books/types";

const books: Book[] = [{
  "id": 1,
  "author": "Chinua Achebe",
  "title": "Things Fall Apart",
  "year": 1958,
  "isbn": "111-5-48-945780-0"
},
  {
    "id": 2,
    "author": "Hans Christian Andersen",
    "title": "Fairy tales",
    "year": 1836,
    "isbn": "529-2-84-915319-0"
  },
  {
    "id": 3,
    "author": "Dante Alighieri",
    "title": "The Divine Comedy",
    "year": 1315,
    "isbn": "950-0-74-907910-3"
  }]

const emptyFilters: BooksFilters = {
  isbn: '',
  author: ''
}

test('Show books', () => {
  render(<BooksList books={books} setSelectedBookId={() => {}} filters={emptyFilters} />)

  expect(screen.queryByText('Things Fall Apart')).toBeInTheDocument()
  expect(screen.queryByText('Fairy tales')).toBeInTheDocument()
  expect(screen.queryByText('The Divine Comedy')).toBeInTheDocument()
})

const isbnFilter = { isbn: '529', author: ''}

test('Filter books by ISBN', () => {
  render(<BooksList books={books} setSelectedBookId={() => {}} filters={isbnFilter} />)

  expect(screen.queryByText('Things Fall Apart')).not.toBeInTheDocument()
  expect(screen.queryByText('Fairy tales')).toBeInTheDocument()
  expect(screen.queryByText('The Divine Comedy')).not.toBeInTheDocument()
})

const authorFilter = { isbn: '', author: 'Dante'}

test('Filter books by Author', () => {
  render(<BooksList books={books} setSelectedBookId={() => {}} filters={authorFilter} />)

  expect(screen.queryByText('Things Fall Apart')).not.toBeInTheDocument()
  expect(screen.queryByText('Fairy tales')).not.toBeInTheDocument()
  expect(screen.queryByText('The Divine Comedy')).toBeInTheDocument()
})