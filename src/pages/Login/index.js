import React, { useState } from 'react';
import FormLogin from "../../components/login/formLogin.js";
import './index.css'


const LoginPage =  () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123" 
  }
  /*let adminUser = {email, password};
  let result = await fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(adminUser),
  });
  result = await result.json(); */

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)
    if(details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged In");
      setUser({
        email: details.email
      })
    } else {
      console.log("details do not match");
      setError("details do not match");
    }
  }
  const Logout = () => {
    setUser ({email: ""});
  }
    return (
        <div className="AppLogin">
          {(user.email !=="") ? (
            <div className="welcome">
              <h2> Welcome, <span>{user.email}</span></h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <FormLogin Login={Login} error={error} />
          )} 
        </div>
      );
}
export default LoginPage;

/*
  */