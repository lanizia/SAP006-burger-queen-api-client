import { Input } from '../input/input.js';
import { Label } from '../label/label';
import { Button } from '../button/button';
import './name-client.css'
//import { useState } from 'react/cjs/react.development';

const ClientName = () => {
   /* const [data, setData] = useState({client_name:''})

    const submitHandler = async (e) => {
        e.preventDefault();
        return 
    }*/

    return (
        <>
        <Label 
        htmlFor='client-name'
        labelInfo='label-name'>Nome do Cliente: </Label>
        <Input 
        inputType='text'
        inputPlaceholder='Mariazinha'
        inputName='client-name'
        inputClass='client-name-input'
        id='client-name'
        inputValue=''
         />
        <Button 
        type='submit'
        value='client-name'
        className='btn-client'>
            Enviar
        </Button>
        </>
    )
}

export default ClientName;