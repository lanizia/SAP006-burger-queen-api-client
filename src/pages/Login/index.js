import React, { useState } from 'react';
import { post } from '../../api/api.js';
import FormLogin from "../../components/login/formLogin.js";
import './index.css'


const LoginPage =  () => {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123" 
  // }
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

  const Login = async data => {
    console.log(data)

    try {
      const result = await post('/auth', data);
      localStorage.setItem('user', JSON.stringify(result));


      // const usr = JSON.parse(localStorage.getItem('user'));
      // const token = usr.token

    }catch(error) {
      console.error()

    }
    // if(data.email === adminUser.email && data.password === adminUser.password) {
    //   console.log("Logged In");
    //   setUser({
    //     email: data.email
    //   })
    // } else {
    //   console.log("details do not match");
    //   setError("details do not match");
    // }
  }

  const Logout = () => {
    setUser ({email: ""});
  }

    return (
        <div className="AppLogin">
          {(user.email !== "") ? (
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