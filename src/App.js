import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Updata from "./components/Updata";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/edit/:id" element={<Updata/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
