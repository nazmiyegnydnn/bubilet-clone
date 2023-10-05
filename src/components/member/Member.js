import React from 'react';
import './Member.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Settings from './components/settings/Settings';
import Favorite from './components/favorite/Favorite';
import Profile from './components/profile/Profile';
import Tickets from   './components/tickets/Tickets';
import { Tabs } from 'antd';
import UserIcon from "../../images/UserIcon.png" 


const Member = ({basketData, setBasketData ,basketFavorites}) => {
  const userStorageData = JSON.parse(localStorage.getItem("userData"))

 
  const onChange = (key) => {
    console.log(key);
  };  
  
  const items = [
    {
      key: '1',
      label: 'Profili Düzenle',
      children: <Profile></Profile>,
    },
    {
      key: '2',
      label: 'Biletlerim',
      children: <Tickets  basketData={basketData} setBasketData={setBasketData}></Tickets>,
  },
    {
      key: '3',
      label: 'Favoriler',
      children: <Favorite basketFavorites={basketFavorites}></Favorite>,
    },
    {
      key: '4',
      label: 'Ayarlar',
      children: <Settings></Settings>,
    }
  ];

  return (
    <div className='memberProfile'>
      <Header/>
      <div className='memberheader'>
      <img src={UserIcon}/>
      <div className='headerCloseButton'>
      <p>Hoşgeldin {userStorageData.user.name}</p>
      <button>Çıkış Yap</button>
      </div>
        </div>
      <div className='tab'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
      <Footer />
    </div>
  );
};

export default Member;
