import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import Orders from './index.js'
import {post, get} from '../../api/api'

jest.mock('../../api/api')

describe('Orders', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue([]);
  });

  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const { getByTestId } = render(<Router><Orders /></Router>)

       act( () => {
        fireEvent.change(getByTestId('input-client-name'), {target: {value: 'yoda'}})
      })

      act( () => {
        fireEvent.change(getByTestId('input-client-table'), {target: {value: '1'}})
      })


      await act(async () => {
        fireEvent.click(screen.getByText(/Enviar/i))
      })

      expect(post).toHaveBeenCalled()
    })
  })

 })