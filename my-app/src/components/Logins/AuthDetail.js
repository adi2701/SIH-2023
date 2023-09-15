import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {auth} from './Firebase-config'

export default function AuthDetails() {
    const[authUser,setAuthUser]=useState(null);

    useEffect(()=>{
        const listen =onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user);
            }
            else{
                setAuthUser(null);
            }
        })
        return ()=>{
            listen();
        }
    },[]);

    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log("signed out")
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div className='d-flex justify-content-end'>
      {authUser?<><p>{`${authUser.email} |`}
      <button className="btn mb-1" onClick={userSignOut}>Logout</button></p>
      </>:<p>Guest |<button className="btn mb-1" onClick={userSignOut}>Login</button></p>}
    </div>
  )
}
