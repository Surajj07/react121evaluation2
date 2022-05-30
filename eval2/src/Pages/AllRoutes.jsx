import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'

const AllRoutes = () => {
  return (
    <div>
        <div style={{display:"flex",gap:"20px"}}>
            <Link to="/register/one">Register 1</Link>
            <Link to="/register/two">Register 2</Link>
        </div>
      <Routes>
         
          <Route path='/register/one' element={<RegisterPageOne/>}/>
          <Route path='/register/two' element={<RegisterPageTwo/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
