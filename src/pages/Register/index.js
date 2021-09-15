import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../api/api.js';
import FormRegister from '../../components/register/formRegister';
//import FormSuccess from '../../components/register/formSucess';
import '../Login/index.css'

const Register = () => {
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    const history = useHistory();

    const fetchRegister = async data => {
        try {
            const result = await post('/user', data, false);
            localStorage.setItem('user', JSON.stringify(result));
            history.push('/')
        } catch(e) {
            console.log(e.code);
            console.log(e.message);
    
            console.log("Algo deu errado",e);
            setError("Algo deu errado");
        }
    }


    return (
        <div className="AppLogin">
        
            <FormRegister submitForm={fetchRegister}/> 

        </div>
      );
}
export default Register