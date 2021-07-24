import React from 'react'
import { useErrorHandler } from 'react-error-boundary'

import Modal, { ModalProps } from '../../../components/modal/Modal'
import LoadingPage from '../../loading/LoadingPage'
import useBook from '../hooks/useBook'
import { Book } from '../types'

interface Props extends Omit<ModalProps, 'title'> {
  bookId: Book['id']
}

const BookModal = ({ bookId, ...rest }: Props): JSX.Element => {
  const handleError = useErrorHandler()

  const { data: book, error, isLoading } = useBook(bookId)

  if (error) {
    handleError(error)
    return <></>
  }

  return (
    <Modal {...rest} title={'Riepilogo del libro'}>
      {isLoading ? <LoadingPage /> : book && JSON.stringify(book)}
    </Modal>
  )
}

export default BookModal
