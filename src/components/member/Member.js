import React from 'react';
import './Member.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Settings from './components/settings/Settings';
import Favorite from './components/favorite/Favorite';
import Profile from './components/profile/Profile'
import Tickets from './components/tickets/Tickets';
import { Tabs } from 'antd';


const Member = () => {
 
  const onChange = (key) => {
    console.log(key);
  };  
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Profile></Profile>,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: <Tickets></Tickets>,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: <Favorite></Favorite>,
    },
    {
      key: '4',
      label: 'Tab 4',
      children: <Settings></Settings>,
    }
  ];

  return (
    <div className='memberProfile'>
      <Header/>
      <div className='tab'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
      <Footer />
    </div>
  );
};

export default Member;
