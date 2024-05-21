import "./App.css";
import Subscribe from "./Subscribe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./success";

function App() {
  // const [inputValue, setInputValue] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  //   console.log(inputValue);
  //   // Navigate to another route after submission
  //   navigate('/new-route');
  // }

  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Subscribe />} />
    <Route path="/subscribe/success" element={<Success />} />
  </Routes>
  </BrowserRouter>;
}

export default App;
