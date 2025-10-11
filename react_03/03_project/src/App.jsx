import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-slate-800 text-green-400 font-bold'>hello from the react and tailwind css</h1>
     <Card title = "card no 1" btnText = "view more"/>
     <Card title = "card no 2" btnText = "view result" />
    </>
  )
}

export default App
