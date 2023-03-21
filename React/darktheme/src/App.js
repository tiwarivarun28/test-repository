import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './Components/Context/ThemeContext';
import Nav from './Components/Nav';
import { AuthContext } from './Components/Context/AuthContext';

function App() {
  let {theme,toggleTheme}=useContext(ThemeContext)
  let {isLoggedIn}=useContext(AuthContext)
  return (
    <div className="App" style={{
      backgroundColor:theme==="Dark"? "black":"white",
      color:theme==="Dark"?"white":"black",
      height:"100vh"
    }}>
      <Nav/>
      <h2>Component Theme is :{theme} </h2>
      <button onClick={toggleTheme} disabled={isLoggedIn?false:true}>Change Theme</button>
    </div>
  );
}

export default App;
