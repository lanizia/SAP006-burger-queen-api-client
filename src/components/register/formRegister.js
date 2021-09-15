import React from 'react';
import { Input } from "../input/input.js"
import { Label } from '../label/label';
import { Button } from '../button/button';
import  UsedForm  from './useForm';
import validate from './validateInfo';
import '../login/formLogin.css'
import './dropdown.css'

const FormRegister = ( {submitForm}) => {
    const { handleChange, values, handleSubmit, errors }
     = UsedForm(
         submitForm, 
         validate
    );
    /* const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirm] = useState("")
        const [kitchen, setKitchen]=useState("kitchen");
        const [waiter, setWaiter]=useState("waiter"); 

    function signUp() {
        let item={email, password};
        console.warn(item);
    }*/

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-inner">    
            <h2>Cadastro</h2>
            <div className="form-group">
                <Label htmlFor="email" labelInfo="labels">Email:</Label>
                <Input 
                    inputType="email" 
                    inputPlaceholder="exemplo@exemplo.com" 
                    inputName="email" 
                    id="email"
                    inputValue={values.email}
                    inputOnChange={handleChange}
                 />
                <span className="span-space"> {errors.email && <p>{errors.email}</p>} </span>
            </div>  
            <div className="form-group">
                <Label htmlFor="password" labelInfo="labels">Senha:</Label>
                <Input 
                    inputType="password" 
                    inputPlaceholder="exemplo123" 
                    inputName="password" 
                    id="password" 
                    inputValue={values.password}
                    inputOnChange={handleChange}
                />
                <span className="span-space"> {errors.password && <p>{errors.password}</p>} </span>
            </div>   
            <div className="form-group">
                <Label htmlFor="password" labelInfo="labels">Confirmar senha:</Label>
                <Input 
                    inputType="password" 
                    inputPlaceholder="exemplo123" 
                    inputName="confirmPassword" 
                    id="confirm-password" 
                    inputValue={values.confirmPassword}
                    inputOnChange={handleChange}
                />
                <div className="content">
                <span className="span-space"> {errors.confirmPassword && <p>{errors.confirmPassword}</p>} </span>
                </div>
            </div> 
            <div className="custom-select"> 
                <select 
                    id="options-info" 
                    name="information" 
                    value={values.information} 
                    onChange={handleChange} >
                        <option value=""></option>
                        <option value="waiter"> Salão </option>
                        <option value="kitchen"> Cozinha</option>
                </select>
                <span className="span-space"> {errors.information && <p>{errors.information}</p>} </span>
            </div>
            <Button 
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