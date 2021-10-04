import React from 'react';
import { Input } from '../input/input.js';
import { Label } from '../label/label';
import { Button } from '../button/button';
import UsedForm from './useForm';
import validate from './validateInfo';
import '../formLogin/formLogin.css';

import { Link } from 'react-router-dom';

const FormRegister = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UsedForm(
    submitForm,
    validate,
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Cadastro</h2>
        <div className="form-group">
          <Label htmlFor="email" labelInfo="labels">
            Email:
          </Label>
          <Input
            type="email"
            placeholder="exemplo@exemplo.com"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          <span className="span-space">
            {' '}
            {errors.email && <p>{errors.email}</p>}{' '}
          </span>
        </div>
        <div className="form-group">
          <Label htmlFor="password" labelInfo="labels">
            Senha:
          </Label>
          <Input
            type="password"
            placeholder="exemplo123"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="span-space">
            {' '}
            {errors.password && <p>{errors.password}</p>}{' '}
          </span>
        </div>

        <div className="custom-select">
          <select
            className="select-input-styled"
            data-testid="select-role"
            id="options-info"
            name="role"
            value={values.role}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="waiter"> Salão </option>
            <option value="kitchen"> Cozinha</option>
          </select>
          <span className="span-space">
            {' '}
            {errors.role && <p>{errors.role}</p>}{' '}
          </span>
        </div>
        <Button type="submit" value="login" className="btn-submit">
          Cadastrar
        </Button>
        <p className="txt-paragrafer">
          {' '}
          Já possui cadastro? <Link to={'/'}> Clique aqui e faça Login</Link>
        </p>
      </div>
    </form>
  );
};
export default FormRegister;
