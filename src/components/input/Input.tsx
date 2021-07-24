import React, { ChangeEvent, useCallback } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  value?: string
  setValue?: (value: string) => void
  label?: string
}

const Input = ({ label, setValue, value = '' }: Props): JSX.Element => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue?.(e.target.value),
    [setValue]
  )

  return (
    <Wrapper hasText={value.length > 0}>
      <Label>{label}</Label>
      <StyledInput value={value} onChange={onChange} />
    </Wrapper>
  )
}

const Label = styled.label`
  position: absolute;
  pointer-events: none;

  left: 8px;
  top: 9px;

  transition: font-size 250ms ease, top 250ms ease, left 250ms ease,
    color 250ms ease;
`

const OpenLabel = css`
  font-size: 0.8em;
  top: -15px;
  font-weight: bold;

  left: 2px;
`

const Wrapper = styled.div<{ hasText: boolean }>`
  display: inline-flex;
  gap: 0.5em;
  position: relative;

  ${({ hasText }) =>
    hasText
      ? css`
          ${Label} {
            ${OpenLabel}
          }
        `
      : ''}

  &:focus-within ${Label} {
    color: #f60;
    ${OpenLabel}
  }
`

const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;

  font-size: 1em;
  height: 32px;
  min-width: 250px;

  transition: border-color 250ms ease;

  &:focus {
    outline: none;
    border-color: #f60;
  }
`

export default Input
