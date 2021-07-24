import React, { useMemo } from 'react'
import styled from 'styled-components'

import { formatDateDMY, today } from '../../../common/utils/dateUtils'
import { randomNDigitsString } from '../../../common/utils/randomUtils'
import Modal, { ModalProps } from '../../../components/modal/Modal'

type Props = Omit<ModalProps, 'title'>

const ReceiptModal = ({ closeModal, isOpen }: Props): JSX.Element => {
  const orderNumber = useMemo(() => randomNDigitsString(12), [])

  return (
    <StyledModal
      closeModal={closeModal}
      isOpen={isOpen}
      small
      title={'Acquisto confermato'}
    >
      <p>Ordine numero: {orderNumber}</p>
      <p>Data ordine: {formatDateDMY(today())}</p>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  background: red;
`

export default ReceiptModal
