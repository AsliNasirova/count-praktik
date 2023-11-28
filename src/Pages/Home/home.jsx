import React from 'react'
import { useCount } from '../../Context/CounterContext'

const Home = () => {
    const {Count,setCount}=useCount()
  return (
    <div>
      {Count}
      Home Page
      <button onClick={()=>setCount(Count=>Count+1)}>+</button>
    </div>
  )
}

export default Home
