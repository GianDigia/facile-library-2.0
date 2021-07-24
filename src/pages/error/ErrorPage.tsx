import React, { useEffect } from 'react'
import { FallbackProps } from 'react-error-boundary'

import Button from '../../components/button/Button'
import FullScreenMessageWrapper from '../../components/layout/FullScreenMessageWrapper'

const ErrorPage = ({
  error: { message },
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  useEffect(() => {
    // Generate error logs
    console.log(message)
  }, [message])

  return (
    <FullScreenMessageWrapper>
      <h1>Si è verificato un errore</h1>
      <Button
        text={'Riprova'}
        primaryColor={'#f60'}
        secondaryColor={'white'}
        onClick={resetErrorBoundary}
      />
    </FullScreenMessageWrapper>
  )
}

export default ErrorPage
