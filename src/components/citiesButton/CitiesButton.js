import React from 'react'
import './CitiesButton.scss'
import { useNavigate ,useParams } from "react-router-dom";
import { Button } from "antd";

const CitiesButton = () => {
    const navigate = useNavigate();
    const { name } = useParams();

    const handleHomeClik = () => {
        navigate(`/`);
      };



  return (
    <div className="citiesButton">
        <Button onClick={handleHomeClik}>{name}</Button>
      </div>
    
  )
}

export default CitiesButton