import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPageOne = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>one</h1>
      <input type="text" placeholder='Enter Name' />
      <input type="text" placeholder='Enter Email'/>
      <button onClick={()=>navigate("/register/two")}>next</button>
    </div>
  )
}

export default RegisterPageOne
