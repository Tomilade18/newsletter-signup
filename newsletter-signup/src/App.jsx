import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form action="">
          <div className='input-field'> 
            <label htmlFor="">
              Email Address
            </label>
            <input type="text" placeholder='email@company.com'/>
            <button>Subscribe to monthly newsletter</button>
          </div>
          <div className='image'>
            <img src="./src/assets/Capture.jpg" alt="" />
          </div>
         
        </form>
      </div>
    </>
  )
}

export default App
