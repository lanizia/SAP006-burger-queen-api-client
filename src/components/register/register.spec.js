import React from 'react'
import Register from '../../pages/register/index.js';
import { render, fireEvent, act } from '@testing-library/react'
//import { act } from 'react-dom/test-utils'

describe('Register', () => {
    describe('with valid inputs', () => {

        it('calls the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByText, getByLabelText, getByRole} = render(<Register submitForm={mockFetchRegister}/>)

           await act(async () => {
                fireEvent.change(getByText('email *'), {target: {value: 'email@test.com'}})
                fireEvent.change(getByLabelText('password *'), {target: {value: '1234567'}})
                fireEvent.change(getByRole('select'), {target: {value: 'waiter'}})
            })
            await act(async () => {
                fireEvent.click(getByRole("button"))
            })

            expect(mockFetchRegister).toHaveBeenCalled()
        })
    })

   /* describe('with invalid email', () => {

        it('renders the email validation error', async () => {
            const
        })
    })

    describe('with invalid password', () => {

        it.todo('renders the password validation error')
    }) */
})