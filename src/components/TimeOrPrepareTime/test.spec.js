import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from '../../api/api';
import { orders } from '../../mocks/orders';
import { TimeOrPrepareTime } from '../../components/TimeOrPrepareTime/TimeOrPrepareTime';

jest.mock('../../api/api');

describe('TimeOrPrepareTime', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue(orders);
  });

  it('deve renderizar tempo de preparo', async () => {
    render(
      <Router>
        {' '}
        <TimeOrPrepareTime
          order={{
            createdAt: '2021-09-27T14:13:40.106Z',
            processedAt: '2021-09-27T14:14:40.106Z',
          }}
        />{' '}
      </Router>,
    );

    await waitFor(() => {
      const label = screen.getByText('Tempo de preparo:');
      expect(label).toBeInTheDocument();
    });

    await waitFor(() => {
      const interval = screen.getByText('1 min');
      expect(interval).toBeInTheDocument();
    });
  });

  it('deve renderizar horário do pedido', async () => {
    render(
      <Router>
        {' '}
        <TimeOrPrepareTime
          order={{ createdAt: '2021-09-27T14:13:40.106Z' }}
        />{' '}
      </Router>,
    );

    await waitFor(() => {
      const label = screen.getByText('Horário:');
      expect(label).toBeInTheDocument();
    });

    await waitFor(() => {
      const interval = screen.getByText('11:13');
      expect(interval).toBeInTheDocument();
    });
  });
});
