import { Input } from '../input/input.js';
import { Label } from '../label/label';
import { Button } from '../button/button';
import './name-client.css'
//import { useState } from 'react/cjs/react.development';

const ClientName = ({data, setData, submitHandler}) => {
 
    return (
        <>
         <h2>Carrinho</h2>
        <div className='content-label'>
        <Label 
        htmlFor='client-name'
        labelInfo='label-name'>Nome do Cliente e mesa: </Label>
        <Input 
        inputType='text'
        inputPlaceholder='Mariazinha'
        inputName='client-name'
        inputClass='client-name-input'
        id='client-name'
        inputOnChange={(e) => setData({ ...data, client: e.target.value })}
        inputValue={data.client}
         />
        </div>
         <Input 
        inputType='number'
        inputPlaceholder='1 a 10'
        inputName='client-table'
        inputClass='client-name-input'
        id='client-table'
        inputOnChange={(e) => setData({ ...data, table: e.target.value })}
        inputValue={data.table}
         />
        <Button 
        type='submit'
        value='client-name'
        className='btn-client'
        onClick={()=> {submitHandler(data)}}>
            Enviar
        </Button>
        </>
    )
}

export default ClientName;