import React, { useState }  from 'react';
import loginLogo from "../../assets/images/logocinza.gif";
import { Input } from "../input/input.js"
import { Label } from '../label/label';
import { Button } from '../button/button';
import './formLogin.css'

const FormLogin = ({ Login, error }) => {
    const [data, setData] = useState({email:"", password:""});

    const submitHandler = async e => {
        e.preventDefault();
        return Login(data)
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <div className="image">
                <img src={loginLogo} alt="logo"/>
            </div>    
            <h2>Login</h2>
            {(error !=="") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <Label htmlFor="email" labelInfo="labels">Email:</Label>
                <Input 
                inputType="email" 
                inputPlaceholder="exemplo@exemplo.com" 
                inputName="email" 
                id="email" 
                inputOnChange={e=> setData ({...data, email: e.target.value})} 
                inputValue={data.email}/>
            </div>  
            <div className="form-group">
                <Label htmlFor="password" labelInfo="labels">Password:</Label>
                <Input 
                inputType="password" 
                inputPlaceholder="exemplo123" 
                inputName="password" 
                id="password" 
                inputOnChange={e=> setData ({...data, password: e.target.value})} 
                inputValue={data.password} />
            </div>   
            <Button type="submit" value="login" className="btn-submit">Login</Button>
            <p className="txt-paragrafer"> Ainda não tem cadastro? <a href="#"> Clique aqui</a></p>
        </div>
    </form>
   )
}   
export default FormLogin