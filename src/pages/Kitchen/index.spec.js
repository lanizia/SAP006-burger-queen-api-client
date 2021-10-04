// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'
// import { BrowserRouter as Router } from 'react-router-dom'
// import {post, get} from '../../api/api'
// import Kitchen from './index.js'

// jest.mock('../../api/api')

// describe('Orders', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//     get.mockResolvedValue([]);
//   });

//   describe('with valid inputs', () => {
//     it('calls the onSubmit function', async () => {
//       const { } = render(<Router> <Kitchen /> </Router>)




//       await act(async () => {
//         fireEvent.click(screen.getByText(/Enviar/i))
//       })

//       expect(post).toHaveBeenCalled()
//     })
//   })

//  })