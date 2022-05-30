// Write code for Registration context
import React from 'react';
import axios from 'axios';
import { useContext } from 'react'
import AuthContext from './AuthContext';

const RegistrationContextProvider = () => {

    const [state,dispatch]=useContext(AuthContext)

const registerUser=async()=>{
    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
            name:"suraj",
            email:"eve.holt@reqres.in",
           
        }
    })
    .then((res)=>{
        alert("success")
        dispatch({
            type:"LoginSuccess",
            paylosd:res.data.token
        })
    })
    .catch((err)=>{
        alert("failure")
    })
}
  return (
    <div>
      
    </div>
  )
}

export default RegistrationContextProvider

