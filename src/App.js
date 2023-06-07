import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
