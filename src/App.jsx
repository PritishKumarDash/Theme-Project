import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/ThemeContext'
import Navbar from './Componet/Navbar'
import Home from './Componet/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  )
}

export default App
