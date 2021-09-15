import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../api/api.js';
import FormLogin from "../../components/login/formLogin.js";
import './index.css'


const LoginPage =  () => {
  const [error, setError] = useState("");
  const history = useHistory();

  const redirectAfterLogin = (user) => {
    if(user.role === 'test') {
        history.push('/orders') 
      }

      // if(user.role === 'cozinha') {
      //   history.push('/kitchen')
      // }
  }

  const Login = async data => {
    try {
      const result = await post('/auth', data);

      localStorage.setItem('user', JSON.stringify(result));
            
      redirectAfterLogin(result);

    } catch(e) {
        console.log(e.code);
        console.log(e.message);

        console.log("details do not match");
        setError("details do not match");
    }
  }

  useEffect(() => {
    const localUser = localStorage.getItem('user');

    if(localUser) {
      const user = JSON.parse(localUser);

       redirectAfterLogin(user);
    }
  }, [])

    return (
        <div className="AppLogin">
          <FormLogin Login={Login} error={error} />
        </div>
      );
}
export default LoginPage;
