import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Orders from './index';
import { post, get } from '../../api/api';

jest.mock('../../api/api');

describe('Orders', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    get.mockResolvedValue([]);
  });

  describe('with valid inputs and shopping cart with products', () => {
    it('calls the onSubmit function', async () => {
      //const mockSubmitHandler = jest.fn()
      const { getByTestId } = render(
        <Router>
          <Orders />
        </Router>,
      );
      act(() => {
        fireEvent.change(getByTestId('input-clients'), {
          target: { value: 'jesus' },
        });
      });
      act(() => {
        fireEvent.change(getByTestId('input-table'), {
          target: { value: '1' },
        });
      });

      await act(async () => {
        fireEvent.click(screen.getByText(/Enviar/i));
      });

      expect(post).toHaveBeenCalled();
    });
  });

  describe('with an empty input', () => {
      it('renders an error and dont call the onSubmit function', async () => {

        const { getByTestId } = render(
            <Router>
              <Orders />
            </Router>,
          );
          act(() => {
            fireEvent.change(getByTestId('input-clients'), {
              target: { value: '' },
            });
          });
          act(() => {
            fireEvent.change(getByTestId('input-table'), {
              target: { value: '' },
            });
          });
        

          await act(async () => {
            fireEvent.click(screen.getByText(/Enviar/i));
          });
    
          expect(post).toBe("E-mail ou senha não preenchidos corretamente");
      })
  })
});
