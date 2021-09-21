import React from 'react'
import FormLogin from '../src/components/login/formLogin.js'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

describe('SignIn', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn()
      const { getByTestId, getByRole } = render(<Router><FormLogin Login={mockOnSubmit}/></Router>)

      await act(async () => {
        fireEvent.change(getByTestId('input-email'), {target: {value: 'email@test.com'}})
        fireEvent.change(getByTestId('input-password'), {target: {value: '1234567'}})
      })

      await act(async () => {
        fireEvent.click(getByRole('button'))
      })

      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

  describe('with empty inputs', () => {
    it('renders the inputs errors and dont call the fetchRegister function', async () => {
        const mockOnSubmit = jest.fn()
        const {getByTestId, getByRole} = render(<Router><FormLogin submitForm={mockOnSubmit}/></Router>)

        act(() => {
            fireEvent.change(getByTestId('input-email'), {target: {value: ''}})
            fireEvent.change(getByTestId('input-password'), {target: {value: ''}})
        })

        act(() => {
            fireEvent.click(getByRole('button'))
        })

        expect(mockOnSubmit).not.toHaveBeenCalled()
    })
})

 })