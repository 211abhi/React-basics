import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let [counter, setcounter] =  useState(15)


  return (
    <>
   <h1 className='bg-green-400 text-black mb-4'>Tailwind test</h1>

     <Card username="chaiaurcode"/>

    </>
  )
}

export default App 
