import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../api/api.js';
import FormRegister from '../../components/register/formRegister';
//import FormSuccess from '../../components/register/formSucess';
import '../Login/index.css'

const Register = () => {
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();

    const fetchRegister = async data => {
        try {
            const result = await post('/user', data);
            localStorage.setItem('user', JSON.stringify(result));
        } catch(e) {
            console.log(e.code);
            console.log(e.message);
    
            console.log("Algo deu errado");
            setError("Algo deu errado");
        }
    }

    function submitForm() {
        setIsSubmitted(true)
    }
    const forgetData = () => {
       const storageRemoveData = localStorage.removeItem('user');
       setUser(storageRemoveData) 
    }

    return (
        <div className="AppLogin">
            {!isSubmitted ? 
            <FormRegister submitForm={submitForm}/> : 
            history.push('/')}
        </div>
      );
}
export default Register