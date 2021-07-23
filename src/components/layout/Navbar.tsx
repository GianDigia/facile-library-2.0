import React from 'react'
import styled from 'styled-components'

import Actions from './navbar/Actions'
import Logo from './navbar/Logo'

const Navbar = (): JSX.Element => (
  <Wrapper>
    <Logo />
    <Actions />
  </Wrapper>
)

const Wrapper = styled.header`
  background: #f60;
  padding: 0.5em;
  font-size: 1.5em;
  display: flex;
  justify-content: space-between;
`

export default Navbar
