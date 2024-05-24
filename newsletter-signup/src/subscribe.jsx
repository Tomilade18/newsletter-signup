import { useState } from 'react';
import { useNavigate } from 'react-router-dom';;
import './App.css';

function Subscribe() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    if (inputValue.length < 12) {
      setErrorMessage('You don\'t have the required number of characters.');
    } else {
      setErrorMessage('');
      navigate("/subscribe/success");
    }
  };

  return (
    <div>
      <form>
        <div className='input-field'>
          <h1>Stay updated!</h1>
          <p className='message'>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li className='list'><img src="./icon-list.svg" alt="" />Product discovery and building what matters</li>
            <li className='list'><img src="./icon-list.svg" alt="" />Measuring to ensure updates are a success</li>
            <li className='list'><img src="./icon-list.svg" alt="" />And much more</li>
          </ul>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder='email@company.com'
          />
          <button onClick={handleClick}>Subscribe to monthly newsletter</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <div className='image'>
          <img src="./illustration-sign-up-desktop.svg" alt="" />
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
