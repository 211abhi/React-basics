import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] =  useState(15)



 // let counter = 15
  const  addvalue = () => {
    console.log("clicked", counter);
    //counter = counter + 1 
    setcounter(counter + 1)
  }
  const  removeVAlue = () => {
    
    //counter = counter + 1 

    setcounter(counter - 1)
    }
    

  return (
    <>
    <h1>Chai aur react  </h1>
    <h2> Counter Value: {counter}</h2>

    <button onClick={addvalue}>Add Value</button>
    <br></br>
    <button onClick={removeVAlue}>remove value</button>
    
    
    </>
  )
}

export default App 
