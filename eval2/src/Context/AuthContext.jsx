import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()

const intState={
    isAuth:false,
    token:null
}

const authReducer=(state,action)=>{
    switch(action.type){
        case "registrationSuccess":{
            return {
                ...state,
                isAuth:true,
                token:action.payload
            }
        }
        case "registrationFail":{
            return {
                ...state,
                isAuth:false,
                token:null
            }
        }
        default : {
            return state;
        }
    }
}

const AuthContextProvider = ({children}) => {
 
    const [state,dispatch]=useReducer(authReducer,intState)
  return (
    <div>
        <AuthContext.Provider value={[state,dispatch]} >
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthContextProvider
