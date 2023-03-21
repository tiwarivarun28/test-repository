import { createContext,useState} from "react"

export let ThemeContext=createContext()

function ThemeContextComponent({children}){
    const [theme,setTheme]=useState("Dark")

    const toggleTheme=()=>{
        setTheme(theme==="Dark"? "White" : "Dark")
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextComponent