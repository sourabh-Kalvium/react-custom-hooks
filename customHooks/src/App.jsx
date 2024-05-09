import { useState } from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'
import useSessionStorage from './useSessionsStorage'

function App() {
  const [val,setVal] = useLocalStorage("inputValLocal","")

  const [session,setSession]=useSessionStorage("inputValSession", "")

  const [input, setInput] = useState("")



  let handleinput=(e)=>{
      setInput(e.target.value)
  }


  let handleSubmit=(e)=>{
    if(e.key==="Enter"){
     setVal(input)
     setSession(input)
    }
  }

  console.log(input)
  return (
   
    <>
      <input type="text" onChange={handleinput} onKeyPress={handleSubmit}/>
    </>
  )
}

export default App
