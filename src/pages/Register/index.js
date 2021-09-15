import React, { useState } from 'react';
import FormRegister from '../../components/register/formRegister';
import FormSuccess from '../../components/register/formSucess';
import '../Login/index.css'

const Register = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="AppLogin">
            {!isSubmitted ? 
            <FormRegister submitForm={submitForm} /> : 
            <FormSuccess/>}
        </div>
      );
}
export default Register