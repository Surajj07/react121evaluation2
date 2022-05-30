import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'

function AllRoutes() {
  return (
    <div>
        <h1>Registration form</h1>
      <Link to="/register/one">Click Here for registration</Link>
        <Routes>
            <Route path="/register/one/*" element={<RegisterPageOne/>}/>
            <Route path="/register/two/*" element={<RegisterPageTwo/>} />
            <Route path="/dashboard/*" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }
            />
        </Routes>
    </div>
  )
}

export default AllRoutes