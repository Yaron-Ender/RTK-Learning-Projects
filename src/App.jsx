import { useState } from 'react'
import Counter from './features/counter/Counter.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter App</h1>
    <Counter />
    </>
  )
}

export default App
