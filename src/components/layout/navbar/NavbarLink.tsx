import React, { ReactText } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  text: ReactText
  to: LinkProps['to']
}

const NavbarLink = ({ text, to }: Props): JSX.Element => (
  <StyledLink to={to}>{text}</StyledLink>
)

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5em;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0%);
  transition: background 250ms ease;

  &:hover {
    background: rgba(0, 0, 0, 10%);
  }

  &:active {
    background: rgba(0, 0, 0, 20%);
  }
`

export default NavbarLink
