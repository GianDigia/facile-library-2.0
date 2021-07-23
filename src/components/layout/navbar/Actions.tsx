import React from 'react'
import styled from 'styled-components'

import NavbarLink from './NavbarLink'

const Actions = (): JSX.Element => {
  return (
    <Wrapper>
      <NavbarLink to={'/books'} text={'Books'} />
      <NavbarLink to={'/about'} text={'About'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin-right: 0.5em;
`

export default Actions
