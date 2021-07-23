import React from 'react'
import styled, { keyframes } from 'styled-components'

import spinner from './../../images/spinner.svg'

const Spinner = (): JSX.Element => <Wrapper src={spinner} />

const spin = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`

const Wrapper = styled.img`
  width: 2.5em;
  animation: ${spin} 1.5s linear infinite;
`

export default Spinner
