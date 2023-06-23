import React,{useState}from 'react'
import Home from './components/home'
import InputField from './components/inputField';
export let ThemeContext=React.createContext();


function App() {
  let [test,setTest]=useState(false);

  return (
    <Home/>
  )
}

export default App