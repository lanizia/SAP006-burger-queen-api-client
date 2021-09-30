import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Orders from './index';
//import ClientName from '../../components/nameClient/nameClient.js';
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

  /* describe('with an empty input', () => {
    it('renders an error', async() => {
      const { getByTestId } = render(
        <Router>
          <Orders />
        </Router>,
      );
     
        fireEvent.change(getByTestId('input-clients'), {
          target: { value: '' },
        });
    
     
        fireEvent.change(getByTestId('input-table'), {
          target: { value: '' },
        });
     
     
       //const error = screen.getByTestId('error');
    
        //(<ClientName error={error} />);
        fireEvent.click(screen.getByText(/Enviar/i));
  
      expect(post).toHaveBeenCalled();
      expect(await screen.findByText('E-mail ou senha não preenchidos corretamente')).toBeInTheDocument();
    });
  });*/
});
