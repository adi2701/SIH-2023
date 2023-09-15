import React, { useState } from 'react';
import {auth} from './Firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

const signIn=(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{console.log(userCredential)})
.catch((error)=>{
  console.log(error);
})
}


 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5 " style={{ marginTop: '-50px' }}>
      <div className="text-center p-5 border rounded-3 mb-4 shadow">
        <h2>Login</h2>
        <div className="form-floating mt-4">
          <input
            type="email"
            className="form-control form-control-lg" // Enlarged input field
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <label htmlFor="floatingInput"  >Email address</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control form-control-lg" // Enlarged input field
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <label htmlFor="floatingPassword"  >Password</label>
        </div>
        <div className="mb-3 text-danger"></div>
        <div className="mb-3 text-success"></div>
        <button className="btn btn-success btn-lg w-100 mt-2" type="submit" onClick={signIn}>Login</button> {/* Enlarged button */}
        <p className="mt-3">
          Don't have an account? <a href="#"></a>Sign Up 
        </p>
      </div>
    </div>
  );
}
