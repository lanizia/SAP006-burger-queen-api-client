import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from '../../api/api';
import Waiter from './index';
import { orders } from '../../mocks/orders';

jest.mock('../../api/api');

describe('Waiter', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue(orders);
  });

  it('deve renderizar um pedido pronto com o status pedido Pronto', async () => {
    render(
      <Router>
        {' '}
        <Waiter  />{' '}
      </Router>,
    );

    const status = await waitFor(() => screen.getByText('Pronto'));

    expect(status).toBeInTheDocument();
  });
});
