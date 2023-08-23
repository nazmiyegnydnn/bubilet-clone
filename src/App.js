import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
