import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../api/api.js';
import FormLogin from '../../components/login/formLogin.js';
import './index.css'


const LoginPage =  () => {
  const [error, setError] = useState('');
  const history = useHistory();

  const redirectAfterLogin = (user) => {
    if(user.role === 'waiter') {
        history.push('/orders') 
      }

      if(user.role === 'kitchen') {
        history.push('/kitchen')
      }
  }

  const Login = async data => {
    try {
      const result = await post('/auth', data);

      localStorage.setItem('user', JSON.stringify(result));
            
      redirectAfterLogin(result);

    } catch(e) {
        console.log(e.code);
        console.log(e.message);
        setError('E-mail ou senha não preenchidos corretamente');
    }
  }

  useEffect(() => {
    const localUser = localStorage.getItem('user');

    if(localUser) {
      const user = JSON.parse(localUser);

       redirectAfterLogin(user);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <div className='AppLogin'>
          <FormLogin Login={Login} error={error} />
        </div>
      );
}
export default LoginPage;
