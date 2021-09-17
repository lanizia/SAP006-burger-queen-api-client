import React from 'react'
//import Register from '../../pages/register/index.js';
import { render, fireEvent, act } from '@testing-library/react'
import FormRegister from './formRegister.js';
//import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'


describe('Register', () => {
    describe('with valid inputs', () => {

        it('calls the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<Router><FormRegister submitForm={mockFetchRegister}/></Router>)

            act(() => {
                fireEvent.change(getByTestId("input-email"), {target: {value: "email@test.com"}})
                fireEvent.change(getByTestId("input-password"), {target: {value: "1234567"}})
                fireEvent.change(getByTestId('select-role'), {target: {value: 'waiter'}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).toHaveBeenCalled()
        })
    })

    describe('with empty inputs', () => {
        it('renders the inputs errors and dont call the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<Router><FormRegister submitForm={mockFetchRegister}/></Router>)

            act(() => {
                fireEvent.change(getByTestId("input-email"), {target: {value: ''}})
                fireEvent.change(getByTestId("input-password"), {target: {value: ''}})
                fireEvent.change(getByTestId('select-role'), {target: {value: ''}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).not.toHaveBeenCalled()
    
        })
    })

    describe('with empty email inputs', () => {
        it('renders the input errors and dont call the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<Router><FormRegister submitForm={mockFetchRegister}/></Router>)

            act(() => {
                fireEvent.change(getByTestId("input-email"), {target: {value: ''}})
                fireEvent.change(getByTestId("input-password"), {target: {value: "1234567"}})
                fireEvent.change(getByTestId('select-role'), {target: {value: 'waiter'}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).not.toHaveBeenCalled()
    
        })
    })

    describe('with empty password inputs', () => {
        it('renders the input errors and dont call the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<Router><FormRegister submitForm={mockFetchRegister}/></Router>)

            act(() => {
                fireEvent.change(getByTestId("input-email"), {target: {value: 'test@example.com'}})
                fireEvent.change(getByTestId("input-password"), {target: {value: ''}})
                fireEvent.change(getByTestId('select-role'), {target: {value: 'waiter'}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).not.toHaveBeenCalled()
    
        })
    })

    describe('with empty role option', () => {
        it('renders the role error and dont call the fetchRegister function', async () => {
            const mockFetchRegister = jest.fn()
            const {getByTestId, getByRole} = render(<Router><FormRegister submitForm={mockFetchRegister}/></Router>)

            act(() => {
                fireEvent.change(getByTestId("input-email"), {target: {value: 'test@example.com'}})
                fireEvent.change(getByTestId("input-password"), {target: {value: '1234567'}})
                fireEvent.change(getByTestId('select-role'), {target: {value: ''}})
            })

            act(() => {
                fireEvent.click(getByRole('button'))
            })

            expect(mockFetchRegister).not.toHaveBeenCalled()
    
        })
    })
})