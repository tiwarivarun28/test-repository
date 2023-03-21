import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { ThemeContext } from "./Context/ThemeContext"

export default function Nav() {
   let {theme}= useContext(ThemeContext)
   let {isLoggedIn,login,logout}=useContext(AuthContext)
  return (
    <div style={{
        background:theme==="Dark"? "white":"black",
        color:theme==="Dark"?"black":"white",
        padding:"5px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

    }}>
        <h3>Is User Authenticated : <span style={{color:"green"}}>{isLoggedIn?"YES":"NO"}</span></h3>
        <div>
            <button onClick={login}  disabled={isLoggedIn? true:false}>Login</button>&nbsp;&nbsp;&nbsp;
            <button onClick={logout} disabled={isLoggedIn? false:true}>Logout</button>
        </div>
    </div>
  )
}
