import React, { Dispatch, SetStateAction, useCallback } from 'react'
import styled from 'styled-components'

import { Book, selectedBookIdType } from '../types'

interface Props {
  book: Book
  setSelectedBookId: Dispatch<SetStateAction<selectedBookIdType>>
}

const BookCard = ({ book, setSelectedBookId }: Props): JSX.Element => {
  const { author, id, isbn, title, year } = book

  const handleClick = useCallback(() => {
    setSelectedBookId(id)
  }, [id, setSelectedBookId])

  return (
    <Wrapper onClick={handleClick}>
      <PictureWrapper>
        <Picture img={`https://picsum.photos/id/${id}/200/300`} />
      </PictureWrapper>
      <Info>
        <ISBN>ISBN: {isbn}</ISBN>
        <Title>{title}</Title>
        <Author>{author}</Author> <Year>({year})</Year>
      </Info>
    </Wrapper>
  )
}

const PictureWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`

const Picture = styled.div<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  overflow: hidden;
  transition: transform 150ms ease;
`

const Wrapper = styled.div`
  min-width: 200px;
  flex: 1;
  border-radius: 15px;
  cursor: pointer;

  transition: box-shadow 150ms ease, transform 150ms ease;

  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 5px 15px -1px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }

  &:hover ${Picture} {
    transform: scale(1.1);
  }
`

const Info = styled.div`
  padding: 1em;
`

const Title = styled.div`
  font-size: 1.1em;
  font-weight: bold;
`

const Author = styled.div`
  display: inline;
  font-size: 0.9em;
  color: grey;
`

const Year = styled.div`
  display: inline;
  font-size: 0.9em;
  color: grey;
`

const ISBN = styled.div`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 10px;
`

export default BookCard
