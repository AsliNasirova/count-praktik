import { useState } from 'react'
import './App.css'
import { CounterProvider } from './Context/CounterContext'
import Home from './Pages/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterProvider>
      <Home/>
     </CounterProvider>
    </>
  )
}

export default App
