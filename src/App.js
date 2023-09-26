import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import CitiesDetail from "./components/citiesDetail/CitiesDetail";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import EventsDetay from "./components/eventsDetay/EventsDetay";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:name" element={<CitiesDetail/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/eventsDetay" element={<EventsDetay/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
