import { Input } from '../input/input.js';
import { Label } from '../label/label';
import './dataClient.css';
//import { useState } from 'react/cjs/react.development';

const DataClient = ({ data, setData, error }) => {
  return (
    <>
      <h2>Carrinho</h2>
      {error !== '' ? (
        <div data-testid="error" className="error">
          {error}
        </div>
      ) : (
        ''
      )}
      <div className="content-label">
        <Label htmlFor="client-name" labelInfo="label-name">
          Nome do Cliente e mesa:{' '}
        </Label>
        <Input
          inputType="text"
          inputPlaceholder="Mariazinha"
          inputName="client-name"
          inputClass="client-name-input"
          id="clients"
          inputOnChange={(e) => setData({ ...data, client: e.target.value })}
          inputValue={data.client}
        />
      </div>
      <Input
        inputType="number"
        inputPlaceholder="1 a 10"
        inputName="client-table"
        inputClass="client-name-input"
        id="table"
        inputOnChange={(e) => setData({ ...data, table: e.target.value })}
        inputValue={data.table}
      />
    </>
  );
};

export default DataClient;
