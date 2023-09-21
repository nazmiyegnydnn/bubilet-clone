import React from 'react'
import './RightBox.scss'
import { useNavigate } from "react-router-dom";
import {useSelector ,useDispatch} from 'react-redux'  
import { filterEventsByCity} from '../../appSlice';


const RightBox = () => {
  const dispatch = useDispatch()
const {cities} = useSelector(state => state.app) 
const navigate = useNavigate();


const handlePage = (el) => {
  navigate(`/${el.name}`);
  dispatch(filterEventsByCity())
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