import React, { useCallback } from 'react'
import styled from 'styled-components'

import Input from '../../../components/input/Input'
import { BooksFilters } from '../types'

interface Props {
  filters: BooksFilters
  updateFilters: (filters: BooksFilters) => void
}

const BooksHeader = ({ filters, updateFilters }: Props): JSX.Element => {
  const { author = '', isbn = '' } = filters
  const setAuthor = useCallback(
    (author: string) => updateFilters({ author }),
    [updateFilters]
  )

  const setIsbn = useCallback(
    (isbn: string) => updateFilters({ isbn }),
    [updateFilters]
  )

  return (
    <Wrapper>
      <h1>Cerca qui il tuo libro:</h1>

      <SearchWrapper>
        <Input
          label={'Ricerca per autore'}
          value={author}
          setValue={setAuthor}
        />
        <Input label={'Ricerca per ISBN'} value={isbn} setValue={setIsbn} />
      </SearchWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2em;
`

export default BooksHeader
