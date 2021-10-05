import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Orders from './index';
import { post, get } from '../../api/api';
import { products } from '../../mocks/orders';

jest.mock('../../api/api');

describe('Orders', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue(products);
  });

  describe('with valid inputs and shopping cart with products', () => {
    it('calls the onSubmit function', async () => {
      const { getByTestId } = render(
        <Router>
          <Orders />
        </Router>,
      );

      fireEvent.change(getByTestId('input-clients'), {
        target: { value: 'jesus' },
      });

      fireEvent.change(getByTestId('input-table'), {
        target: { value: '1' },
      });

      await act(async () => {
        fireEvent.click(screen.getByText(/Enviar/i));
      });

      expect(post).toHaveBeenCalled();
    });
  });
});
