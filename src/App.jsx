import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import LineChart from './assets/components/LineChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <h1>Vite + React</h1>
      <LineChart></LineChart>
      
    </>
  )
}

export default App
