import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<List />}></Route> 
          <Route path="/hotels/:id" element={<Hotel />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
