import React from 'react'

import Spinner from '../../components/common/Spinner'
import FullScreenMessageWrapper from '../../components/layout/FullScreenMessageWrapper'

const LoadingPage = (): JSX.Element => {
  return (
    <FullScreenMessageWrapper>
      <h1>Caricamento in corso</h1>
      <Spinner />
    </FullScreenMessageWrapper>
  )
}

export default LoadingPage
