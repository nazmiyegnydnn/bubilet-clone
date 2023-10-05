import React from 'react'
import './CitiesButton.scss'
import { useNavigate  } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";

const CitiesButton = () => {
    const navigate = useNavigate();
    const {events} = useSelector((state) => state.app);

    const handleHomeClik = () => {
        navigate(`/`);
      };



  return (
    <div className="citiesButton">
        <Button onClick={handleHomeClik}>{events[0]?.city}</Button>
      </div>
    
  )
}

export default CitiesButton