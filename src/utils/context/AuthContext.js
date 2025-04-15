import { createContext, useContext } from "react";

export const authContext = createContext({user:'',setUser:()=>{}})

export const useAuthContext = () => useContext(authContext)