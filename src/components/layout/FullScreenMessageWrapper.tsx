import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const FullScreenMessageWrapper = ({ children }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Flex>{children}</Flex>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: grid;
  place-items: center;

  color: #f60;
`

const Flex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export default FullScreenMessageWrapper
