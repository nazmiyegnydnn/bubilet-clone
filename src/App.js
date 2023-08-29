import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../src/components/home/Home";
import CitiesDetail from "./components/citiesDetail/CitiesDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:name" element={<CitiesDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
