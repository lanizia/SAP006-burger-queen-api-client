import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from '../../api/api';
import Kitchen from './index.js';
import { orders } from '../../mocks/orders';

jest.mock('../../api/api');

describe('Kitchen', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue(orders);
  });

  it('deve renderizar uma lista de pedidos para serem preparados e mostrar seu status como pendente', async () => {
    render(
      <Router>
        {' '}
        <Kitchen />{' '}
      </Router>,
    );

    await waitFor(() => {
      const client_name = screen.getByText('mia');
      expect(client_name).toBeInTheDocument();
    });
  });
});
