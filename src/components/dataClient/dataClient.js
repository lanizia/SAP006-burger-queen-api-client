import { Input } from '../input/input.js';
import { Label } from '../label/label';
import './dataClient.css';
//import { useState } from 'react/cjs/react.development';

const DataClient = ({ data, setData, error }) => {
  return (
    <>
      <h2>Carrinho</h2>
      {error !== '' ? (
        <div data-testid='error' className='error'>
          {error}
        </div>
      ) : (
        ''
      )}
      <div className='content-label'>
        <Label htmlFor='client-name' labelInfo='label-name'>
          Nome do Cliente e mesa:{' '}
        </Label>
        <Input
          type='text'
          placeholder='Mariazinha'
          name='client-name'
          className='client-name-input'
          id='clients'
          onChange={(e) => setData({ ...data, client: e.target.value })}
          value={data.client}
        />
      </div>
      <Input
        type='number'
        placeholder='1 a 10'
        min='1'
        max= '10'
        name='client-table'
        className='client-name-input'
        id='table'
        onChange={(e) => setData({ ...data, table: e.target.value })}
        value={data.table}
      />
    </>
  );
};

export default DataClient;
