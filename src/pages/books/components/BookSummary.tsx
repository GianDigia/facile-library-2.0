import React from 'react'
import styled from 'styled-components'

import Button from '../../../components/button/Button'
import { Book } from '../types'

interface Props {
  book: Book
}

const BookSummary = ({ book }: Props): JSX.Element => {
  const { author, id, isbn, title, year } = book

  return (
    <div>
      <Wrapper>
        <Picture src={`https://picsum.photos/id/${id}/200/300`} />
        <BookData>
          <div>
            Titolo: <Info>{title}</Info>
          </div>
          <div>
            ISBN: <Info> {isbn}</Info>
          </div>
          <div>
            Autore: <Info>{author}</Info>
          </div>
          <div>
            Anno: <Info>{year}</Info>
          </div>
          <div>
            Descrizione:
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Description>
          </div>
        </BookData>
      </Wrapper>

      <Row>
        <Button
          text={'Compralo ora'}
          primaryColor={'#f60'}
          secondaryColor={'white'}
        />
      </Row>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-around;
`

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Picture = styled.img`
  border-radius: 15px;
  align-self: center;
  width: 35%;
`

const BookData = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.3em;
  width: 55%;
  min-width: 300px;
`

const Info = styled.div`
  display: inline;
  font-size: 0.9em;
  font-weight: bold;
`

const Description = styled.div`
  color: grey;
  font-size: 0.9em;
`

export default BookSummary
