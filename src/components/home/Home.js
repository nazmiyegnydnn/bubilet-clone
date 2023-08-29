import React from 'react'
import './Home.scss'
import RightBox from '../rightBox/RightBox'
import LeftBox from '../leftBox/LeftBox'

const Home = () => {
  return (
    <div className='home'> 
    <div className='home-container'>
        <div className='leftBox'>
        <LeftBox/>
    </div>
        <div className='rightBox'>
         <RightBox/>
        </div>
    </div>
    </div>
  )
}

export default Home