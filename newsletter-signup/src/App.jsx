import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <form action="">
          <div className='input-field'> 
          
            <h1>Stay updated !</h1>
            <p className='message'>Join 60000+ product managers receiving monthly updates on:</p>
           <ul>
            <li className='list'><img src="./src/assets/icon-list.svg" alt="" />product discovery and building what matters</li>
            <li className='list'><img src="./src/assets/icon-list.svg" alt="" />measuring to ensure updates are a sucess</li>
            <li className='list'><img src="./src/assets/icon-list.svg" alt="" />And much more</li>
           </ul>
            <label htmlFor="">
              Email address
            </label>
            <input type="email" placeholder='email@company.com'/>
            <button>Subscribe to monthly newsletter</button>
          </div>
          <div className='image'>
            <img src="./src/assets/illustration-sign-up-desktop.svg" alt="" />
          </div>
         
        </form>
      </div>
    </>
  )
}

export default App
