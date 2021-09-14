import React, { useState } from 'react';
import { Input } from "../input/input.js"
import { Label } from '../label/label';
import { Button } from '../button/button';
import '../login/formLogin.css'
import './dropdown.css'

const FormRegister = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    //const [kitchen, setKitchen]=useState("kitchen");
    //const [waiter, setWaiter]=useState("waiter");

    function signUp() {
        let item={email, password};
        console.warn(item);
    }

    return (
    <form>
        <div className="form-inner">    
            <h2>Cadastro</h2>
            <div className="form-group">
                <Label htmlFor="email" labelInfo="labels">Email:</Label>
                <Input 
                    inputType="email" 
                    inputPlaceholder="exemplo@exemplo.com" 
                    inputName="email" 
                    id="email"
                    inputValue={email}
                    inputOnChange={(e)=>setEmail(e.target.value)}
                 />
            </div>  
            <div className="form-group">
                <Label htmlFor="password" labelInfo="labels">Password:</Label>
                <Input 
                    inputType="password" 
                    inputPlaceholder="exemplo123" 
                    inputName="password" 
                    id="password" 
                    inputValue={password}
                    inputOnChange={(e)=>setPassword(e.target.value)}
                />
            </div>   
            <div className="custom-select"> 
                <select id="options-info" name="options">
                    <option value="waiter"> Salão </option>
                    <option value="kitchen"> Cozinha</option>
                </select>
            </div>
            <Button onClick={signUp}
                type="submit" 
                value="login" 
                className="btn-submit">
                    Cadastrar
            </Button>
        </div>
    </form>
   )
}   
export default FormRegister