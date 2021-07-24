import React, { MouseEventHandler, ReactText } from 'react'
import styled from 'styled-components'

interface Props extends WrapperProps {
  text: ReactText
}

const Button = ({ text, ...rest }: Props): JSX.Element => (
  <Wrapper {...rest}>{text}</Wrapper>
)

interface WrapperProps {
  className?: string
  primaryColor: string
  secondaryColor: string
  onClick: MouseEventHandler
}

const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;
  border: 1px solid ${({ primaryColor }) => primaryColor};
  padding: 0.3em 0.8em;
  border-radius: 5px;

  background: ${({ secondaryColor }) => secondaryColor};
  color: ${({ primaryColor }) => primaryColor};
  transition: background 150ms ease, color 150ms ease;
  &:hover {
    color: ${({ secondaryColor }) => secondaryColor};
    background: ${({ primaryColor }) => primaryColor};
  }
`

export default Button
