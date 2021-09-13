import React, { useState }  from 'react';
import loginLogo from "../../logocinza.gif";
import './formLogin.css'

const FormLogin = ({ Login, error }) => {
    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
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
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="exemplo@exemplo.com" name="email" id="email" onChange={e=> setDetails ({...details, email: e.target.value})} value={details.email}/>
            </div>  
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="exemplo123" name="password" id="password" onChange={e=> setDetails ({...details, password: e.target.value})} value={details.password} />
            </div>   
            <input type="submit" value="LOGIN" />
        </div>
    </form>
   )
}   
export default FormLogin