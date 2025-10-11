import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let  [counter,setCounter] =  useState(15)

let [sliu,setSilu] = useState(`silu`)


  //let counter = 15

  function addvalue(){
    counter = counter + 1

    console.log("add vlaue ",counter);
    setCounter(counter)
   
  }
  function removevalue(){
    if(counter<0){
      counter = counter + 1
    }
    counter = counter -1
    setCounter(counter)
  }

  function silufn(){
    setSilu(`silu and silu `)
  }

  return (
    <>
      
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addvalue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removevalue}
      >Remove value value {counter}</button>

      <h1>{sliu}</h1>
      <button >silu click</button>
    </>  
  )
}

export default App
