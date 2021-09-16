import React from 'react'
import FormLogin from '../src/components/login/formLogin.js'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

describe("SignIn", () => {
  describe("with valid inputs", () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn()
      const { getByTestId, getByRole} = render(<Router><FormLogin Login={mockOnSubmit}/></Router>)

      await act(async () => {
        fireEvent.change(getByTestId("input-email"), {target: {value: "email@test.com"}})
        fireEvent.change(getByTestId("input-password"), {target: {value: "1234567"}})
      })

      await act(async () => {
        fireEvent.click(getByRole("button"))
      })

      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

//   describe("with invalid email", () => {
//     it("renders the email validation error", async () => {
//       const {getByLabelText, container} = render(<SignIn />)

//       await act(async () => {
//         const emailInput = getByLabelText("Email Address *")
//         fireEvent.change(emailInput, {target: {value: "invalid email"}})
//         fireEvent.blur(emailInput)
//       })

//       expect(container.innerHTML).toMatch("Enter a valid email")
//     })
//   })

//   describe("with invalid password", () => {
//     it("renders the password validation error", async () => {
//       const {getByLabelText, container} = render(<SignIn />)

//       await act(async () => {
//         const paswordInput = getByLabelText("Password *")
//         fireEvent.change(paswordInput, {target: {value: "123"}})
//         fireEvent.blur(paswordInput)
//       })

//       expect(container.innerHTML).toMatch("Password should be longer than 6 characters")

//     })
//   })
 })