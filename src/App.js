import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Data from "./data";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/data" element={<Data />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
