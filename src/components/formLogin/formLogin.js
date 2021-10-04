import React, { useState } from 'react';
import loginLogo from '../../assets/images/logocinza.gif';
import { Input } from '../input/input.js';
import { Label } from '../label/label';
import { Button } from '../button/button';
import './formLogin.css';
import { Link } from 'react-router-dom';

const FormLogin = ({ Login, error }) => {
  const [data, setData] = useState({ email: '', password: '' });

  const submitHandler = async (e) => {
    e.preventDefault();
    return Login(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-inner'>
        <div className='image'>
          <img src={loginLogo} alt='logo' />
        </div>
        <h2>Login</h2>
        {error !== '' ? <div className='error'>{error}</div> : ''}
        <div className='form-group'>
          <Label htmlFor='email' labelInfo='labels'>
            Email:
          </Label>
          <Input
            type='email'
            placeholder='exemplo@exemplo.com'
            name='email'
            id='email'
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </div>
        <div className='form-group'>
          <Label htmlFor='password' labelInfo='labels'>
            Password:
          </Label>
          <Input
            type='password'
            placeholder='exemplo123'
            name='password'
            id='password'
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
            value={data.password}
          />
        </div>
        <Button type='submit' value='login' className='btn-submit'>
          Login
        </Button>
        <p className='txt-paragrafer'>
          {' '}
          Ainda não tem cadastro? <Link to={'/register'}> Clique aqui</Link>
        </p>
      </div>
    </form>
  );
};
export default FormLogin;
