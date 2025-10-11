import { useState, useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setPassword] = useState("")

// ret hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberallowed) string += "0123456789"
    if (charallowed) string += "!@#$%^&*()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)
  }, [length, numberallowed, charallowed, setPassword])


  const copyPassword = useCallback(() =>{
    window.navigator.clipboard.writeText(password)
  },
[password])





useEffect(()=>{
    passwordGenerator()
   },[length, numberallowed, charallowed, passwordGenerator])

  return (
    <>
      <div className='w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center'>
        <div className='w-full max-w-md mx-auto rounded-lg my-8 text-4xl text-orange-500 p-4 text-center  '>passwordGenerator</div>
        <div className='w-full max-w-md mx-auto rounded-lg my-8 bg-gray-900 p-10 flex gap-0'>
          <input
            type="text"
            value={password}
            className='outline-none w-full   bg-white text-slate-500 p-4 rounded-tl-2xl rounded-bl-2xl'
            placeholder='password'
            readOnly
            ref={passwordRef}
            onClick={copyPassword}
          />
          <button className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0 rounded-tr-2xl rounded-br-2xl '>copy</button>
        </div>

        <div className='flex text-sm gap-x-2 text-center'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label> length :{length}</label>

          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberallowed}
              id='numberChecked'
              onChange={(e) => {
                setnumberallowed((prev) => !prev)
              }}
            />
            <label> include numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={charallowed}
              id='charChecked'
              onChange={(e) => {
                setcharallowed((prev) => !prev)
              }}
            />
            <label> include special characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
