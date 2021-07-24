import './modal.css'

import React, { ReactNode, useEffect } from 'react'
import ReactModal, { Styles } from 'react-modal'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

export interface ModalProps extends ReactModal.Props {
  closeModal: () => void
  children?: ReactNode
  title?: string
  small?: boolean
}

const Modal = ({
  children,
  closeModal,
  isOpen,
  onAfterClose,
  small = false,
  title,
}: ModalProps): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const style = small ? smallStyle : largeStyle

  return (
    <CSSTransition in={isOpen} timeout={250} classNames='dialog'>
      <ReactModal
        onAfterClose={onAfterClose}
        closeTimeoutMS={250}
        isOpen={isOpen}
        style={style}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <ModalWrapper>
          <ModalHeader>
            {title && title}
            <CloseIcon onClick={closeModal}>&#10005;</CloseIcon>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalWrapper>
      </ReactModal>
    </CSSTransition>
  )
}

const ModalWrapper = styled.div`
  position: relative;
`

const ModalHeader = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`

const ModalBody = styled.div`
  padding: 1em 0 0 0;
`

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    text-shadow: 0 0 1px rgb(0 0 0 / 50%);
  }
`

ReactModal.setAppElement('#root')

const largeStyle: Styles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 30%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '800px',
    width: '85%',
    maxHeight: '600px',
  },
}

const smallStyle: Styles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 30%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '85%',
    maxHeight: '600px',
  },
}

export default Modal
