export interface Book {
  id: number
  author: string
  title: string
  year: number
  isbn: string
}

export type BooksFilters = Partial<Pick<Book, 'author' | 'isbn'>>

export type selectedBookIdType = Book['id'] | null
