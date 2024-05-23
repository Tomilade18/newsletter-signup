import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Success from './success'

function Subscribe() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.length < 12) {
      setErrorMessage('You don\'t have the required characters.');
    } else {
      navigate("/subscribe/success");
    }
  };

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
            <input type="email"   onChange={handleChange} placeholder='email@company.com'/>
            <button onClick={() => {handleClick}}>Subscribe to monthly newsletter</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
          <div className='image'>
            <img src="./src/assets/illustration-sign-up-desktop.svg" alt="" />
          </div>
         
        </form>
      </div>
    </>
   
  )
}

export default Subscribe