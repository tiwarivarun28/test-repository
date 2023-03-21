import { createContext,useState } from "react";

export let AuthContext=createContext()

export default function AuthContextProviderComponent({children}){
    const [isLoggedIn,setLogin]=useState(false)

    const login=()=>{
        setLogin(true)

    }

    const logout=()=>{
        setLogin(false)
    }
    return(
        <AuthContext.Provider value={{isLoggedIn , login , logout}}>
        {children}
        </AuthContext.Provider>
    )
}