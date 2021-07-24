import { useQuery } from 'react-query'

import { basePath } from '../../../common/config'
import { Book } from '../types'

const useBooks = (id: Book['id']) =>
  useQuery<Book>(
    `book-${id}`,
    () => fetch(`${basePath}/books/${id}`).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
    }
  )

export default useBooks
