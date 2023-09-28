import React from 'react';
import './Member.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Profile from './components/profile/Profile'

const Member = () => {

  return (
    <div className='memberProfile'>
      <Header/>
      <div className='tab'>
        <Profile></Profile>
      </div>
      <Footer />
    </div>
  );
};

export default Member;
