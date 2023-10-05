import  {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import CitiesDetail from "./components/citiesDetail/CitiesDetail";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import EventsDetay from "./components/eventsDetay/EventsDetay";
import ArtistDetail from "./components/artistDetail/ArtistDetail";
import Member from "./components/member/Member";


function App() {
  const [basketData, setBasketData] = useState([])


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:name" element={<CitiesDetail basketData={basketData} setBasketData={setBasketData}  />}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/eventsDetay/:eventsDetailId" element={<EventsDetay/>}></Route>
          <Route path="/artistDetail" element={<ArtistDetail/>}></Route>
          <Route path="/memberProfile" element={<Member/>}></Route>
      </Routes>basketData={basketData}
      </BrowserRouter>
    </div>
  );
}

export default App;
