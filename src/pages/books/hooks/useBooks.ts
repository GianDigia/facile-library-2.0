import { useQuery } from 'react-query'

import { basePath } from '../../../common/config'
import { Book } from '../types'

const useBooks = () =>
  useQuery<Book[]>(
    'books',
    () => fetch(`${basePath}/books`).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
    }
  )

export default useBooks
