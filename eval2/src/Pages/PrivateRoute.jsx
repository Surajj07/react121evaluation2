import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const [state]=useContext(AuthContext)

    if(state.isAuth)
    {
        return children
    }
  return (
    <div>
      <Navigate to='/register/one'/>
    </div>
  )
}

export default PrivateRoute
