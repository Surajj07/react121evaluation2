import React, { useContext } from 'react'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function Dashboard() {
    const [state,dispatch] = useContext(RegistrationContext)
  return (
    <div>
        <h1>Dashboard</h1>
        <div>user:{state.user}</div>
        <div>email:{state.email}</div>
        <div>address:{state.address}</div>
        <div>number:{state.number}</div>
    </div>
  )
}

export default Dashboard


