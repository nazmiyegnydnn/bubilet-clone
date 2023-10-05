import React from "react";
import "./ArtistDetail.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AddFavoritesButton from "../addFavoritesButton/AddFavoritesButton";
import SearchButton from '../searchButton/SearchButton'
import CitiesButton from "../citiesButton/CitiesButton";


const ArtistDetail = () => {

 
  return (
    <div className="artistDetail">
      <Header />
      <SearchButton/>
      <CitiesButton/>
      <div className="topTitle">Home/Etkinlik/Sanatçı</div>
      <div className="artistDetailMain">
        <div className="artistDetailLeft"></div>
        <div className="artistDetailRight">
          <div className="artistTitle">
            <h3>Sanatçı Adı</h3>
            <AddFavoritesButton />
          </div>
          <p>Sanatçı</p>
          <p>Etkinlik Türü</p>
          <div className="artistText">
            <p>Sanatçı Bilgi</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistDetail;
