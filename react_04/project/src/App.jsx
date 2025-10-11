import { useState } from 'react'


function App() {
 const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 '
      style={{ backgroundColor: color }}
      ></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3.5 shadow-xl bg-white px-3 py-2 rounded-2xl'>
          <button className='w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("red")}></button>

          <button className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("green")}></button>

          <button className='w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("blue")}></button>

          <button className='w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("orange")}></button>

          <button className='w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("yellow")}></button>

          <button className='w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-950 duration-200 text-white flex justify-center items-center' onClick={() => setcolor("black")}></button>

          
        </div>
      </div>
    </>
  )
}

export default App
