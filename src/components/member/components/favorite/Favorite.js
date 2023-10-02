import React from 'react'
import './Favorite.scss'
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();


const homePage = ()=>{
  navigate(`/citiesDetail`);
 }


  return (
    <div className='favorite'>
        <h3>Favorilerin Boşş (favoriye eklersen  gelecek)</h3>
        <p>Henüz favorilerine hiç etkinlik eklemedin!</p> 
        <p>Etkinliklerden haberdar olmak için hemen favorilerine eklemeye başla..</p>
        <button onClick={homePage}>Hemen Başla</button>
    </div>
  )
}

export default Favorite