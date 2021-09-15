import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../api/api.js';
import FormRegister from '../../components/register/formRegister';
import '../Login/index.css'

const Register = () => {
    const [error, setError] = useState("");
    const history = useHistory();

    const fetchRegister = async data => {
        try {
            const result = await post('/users', data, false);
            localStorage.setItem('user', JSON.stringify(result));
            history.push('/')
            
        } catch(e) {
            console.log(e.code);
            console.log(e.message);
            setError("Algo deu errado");
        }
    }

    return (
        <div className="AppLogin">   
            <FormRegister submitForm={fetchRegister} error={error}/> 
        </div>
      );
}
export default Register