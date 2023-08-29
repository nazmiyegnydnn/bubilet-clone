import React from 'react'
import './RightBox.scss'
import {useSelector } from 'react-redux'  
import { useNavigate } from "react-router-dom";

const RightBox = () => {
const {cities} = useSelector(state => state.app) 
const navigate = useNavigate();


const handlePage = (el) => {
  navigate(`/${el.name}`);
};

  return (
    <div className='rightBox-menu'>
      <div className='cities'>
        {
          cities.map(el =>(
       <div className='citiesCard' onClick={() => handlePage(el)}> 
             <p className='plaka'>{el.id}</p>
             <p className='citiesName'>{el.name}</p>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default RightBox