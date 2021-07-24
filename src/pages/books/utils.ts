import { Book, BooksFilters } from './types'

const normalizeIsbn = (text: string) => text.split(/[-\s]/).join('')

export const filterBook = (book: Book, filters: BooksFilters): boolean => {
  return Object.entries(filters)
    .map(([key, filter]) => {
      if (key === 'isbn') {
        return normalizeIsbn(book['isbn']).startsWith(normalizeIsbn(filter))
      } else {
        return book[key as keyof BooksFilters]
          .toLowerCase()
          .includes(filter.toLowerCase())
      }
    })
    .every(Boolean)
}
