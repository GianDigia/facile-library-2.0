import React from 'react'
import styled from 'styled-components'

const EmptyBookList = (): JSX.Element => {
  return <Wrapper>Nessun risultato</Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  padding: 100px;
`

export default EmptyBookList
