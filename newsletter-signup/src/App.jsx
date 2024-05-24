import "./App.css";
import Subscribe from "./subscribe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./success";

function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Subscribe />} />
    <Route path="/subscribe/success" element={<Success />} />
  </Routes>
  </BrowserRouter>;
}

export default App;
