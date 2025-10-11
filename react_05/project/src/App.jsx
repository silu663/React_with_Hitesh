import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState('white')



  return (
    <>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <button onClick={() => setcolor("red") }>go to the road</button>
                <div className='  flex flex-col justify-between h-2/3 bg-black p-5 rounded-2xl'>
                  <button  className='h-[100px] w-[100px] rounded-full' style={{backgroundColor : color}}></button>
                  <button className='h-[100px] w-[100px] rounded-full bg-yellow-500' style={{backgroundColor : color}}></button>
                  <button className='h-[100px] w-[100px] rounded-full bg-green-500'></button>
                </div>
      </div>
    </>
  )
}

export default App
