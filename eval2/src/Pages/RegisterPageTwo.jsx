import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPageTwo = () => {
  const  navigate=useNavigate()


  return (
    <div>
      <h2>two</h2>
      <h3>Address</h3>
      <input placeholder='Enter Address'></input>
     <h3>Phone Number</h3>
     <input placeholder='Enter Phone Number'></input>
     <button onClick={()=>navigate("/register/one")}>PREV</button>
     <button >submit</button>
    </div>
  )
}

export default RegisterPageTwo

