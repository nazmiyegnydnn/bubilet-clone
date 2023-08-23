import React from 'react'
import './RightBox.scss'
import {useSelector } from 'react-redux'  

const RightBox = () => {
const {cities} = useSelector(state => state.app) 



  return (
    <div className='rightBox'>
      <div className='cities'>
        {
          cities.map(el =>(
       <div className='citiesCard'> 
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