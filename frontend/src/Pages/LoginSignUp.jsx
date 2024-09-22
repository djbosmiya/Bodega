import React from 'react';
import './CSS/LoginSignUp.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Signup function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method: 'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <section className="login-signup-section">
      <div className="login-signup-wrap container my-5">
        <h1 className='text-center'>{state}</h1>
        <div className="login-signup-inputs mt-4">
          {state==="Sign Up"?<input type='text' name='name' value={formData.name} onChange={changeHandler} placeholder='Username'/>:<></>}
          <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email Id'/>
          <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password'/>
        </div>
        <button onClick={() => {state==='Login'?login():signup()}}>Continue</button>
        {state==="Sign Up"?
          <p className="already-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>
          :<p className="already-login">Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        <div className="loginsignup-agree d-flex">
          <input className="logincheck" type='checkbox' name='agree_checkbox' id='agree-checkbox' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  )
}

export default LoginSignUp