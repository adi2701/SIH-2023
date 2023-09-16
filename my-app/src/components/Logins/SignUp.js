import React, { useState } from "react";
import {auth} from './Firebase-config'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  let navigate=useNavigate();


const signUp=(e)=>{
e.preventDefault();
createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{console.log(userCredential)})
.catch((error)=>{
  console.log(error);
})
let b=({auth})
if(b){
    navigate({
        pathname:"/mainpage",
        
    }
    )
}
}

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 mb-5 "
      style={{ marginTop: "-50px" }}
    >
      <div className="text-center p-5 border rounded-3 mb-4 shadow">
        <h2>Sign Up</h2>
        <div className="form-floating mt-4">
          <input
            type="email"
            className="form-control form-control-lg"
            id="floatingInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <label htmlFor="floatingInput1">Email address</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="password"
            className="form-control form-control-lg"
            id="floatingPassword1"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <label htmlFor="floatingPassword1">Password</label>
        </div>
        <div className="mb-3 text-danger"></div>
        <div className="mb-3 text-success"></div>
        <button className="btn btn-success btn-lg w-100 mt-2" type="submit" onClick={signUp}>Sign Up</button>
      </div>
    </div>
  );
}
