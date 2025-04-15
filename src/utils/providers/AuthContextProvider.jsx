import React, { useState } from 'react'
import { authContext } from '../context/AuthContext'
const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState({})
  return (
    <authContext.Provider value={{user,setUser}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider