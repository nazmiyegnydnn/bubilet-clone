import React, { useState } from "react";
import "./CitiesDetail.scss";
import Logo from "../../images/logo-beyaz.svg";
import sliderOne from "../../images/sliderOne.webp";
import sliderTwo from "../../images/sliderTwo.jpg";
import sliderThree from "../../images/sliderThree.jpg";
import sliderFour from "../../images/sliderFour.png";
import konserIcon from '../../images/konserIcon.png';
import tiyatroIcon from '../../images/tiyotroIcon.png';
import festivalIcon from '../../images/festivalIcon.png';
import standupIcon from '../../images/standupIcon.png';
import cocukaktviteleriIcon from '../../images/cocukaktiviteleriIcon.png';
import blogIcon from '../../images/blogIcon.png';
import { SearchOutlined } from "@ant-design/icons";
import { Radio, Input, Tooltip, Button, Carousel ,Dropdown } from "antd";
import { useParams } from "react-router-dom";
import {useSelector } from 'react-redux'
import Footer from '../footer/Footer'



const CitiesDetail = () => {
  const [size, setSize] = useState("large"); // default is 'middle'
  const onSearch = (value) => console.log(value);
  const { name } = useParams(); // Parametre adını değiştirin, bu URL parametresiyle eşleşmelidir
  const {events} = useSelector(state => state.app) 
  const onMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Tarihe Göre
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Fiyata Göre
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Kampanyalar
        </a>
      ),
    },
  ];


  return (
    <div className="citiesDetail">
      <div className="detailHeader">
        <img src={Logo} />
        <div className="login">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Üye Ol</Radio.Button>
          <Radio.Button value="small">→| Üye Girişi</Radio.Button>
        </Radio.Group>
        </div>
      </div>
      <div className="detailSearch">
        <Input placeholder="Etkinlik, sanatçı veya mekan arayın" onSearch={onSearch} />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
      </div>
      <div className="citiesButton">
      <Button>{name}</Button>
      </div>
      <div className="headerLine">
        <Carousel autoplay>
          <div>
            <img src={sliderOne} />
          </div>
          <div>
            <img src={sliderTwo} />
          </div>
          <div>
            <img src={sliderThree} />
          </div>
          <div>
            <img src={sliderFour} />
          </div>
        </Carousel>
      </div>
      <div className="category">
      <Button><img src={konserIcon}/>KONSER</Button>
      <Button><img src={tiyatroIcon}/>TİYATRO</Button>
      <Button><img src={festivalIcon}/>FESTİVAL</Button>
      <Button><img src={standupIcon}/><p>STAND UP</p></Button>
      <Button><img src={cocukaktviteleriIcon}/>ÇOCUK <br/> AKTİVİTELERİ</Button>
      <Button><img src={blogIcon}/>BLOG</Button>
      </div>
      <div className="events">
        <div className="eventsTitle">
          <h2>{name} Etkinlikleri</h2>
          <div className="eventsButton">
          <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>Trendler v</Button>
      </Dropdown>
            <button>Görünüm</button>

          </div>
        </div>
        <div className="eventsCard">
          {
            events.map(el =>(
             <div className="cardDetay">
              <div className="cardImg"><img src={el.img}/></div>
              <h2>{el.title}</h2>
              <p><svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                          <path d="M11 10.0834C11.7594 10.0834 12.375 9.46777 12.375 8.70837C12.375 7.94898 11.7594 7.33337 11 7.33337C10.2406 7.33337 9.625 7.94898 9.625 8.70837C9.625 9.46777 10.2406 10.0834 11 10.0834Z" fill="currentColor"></path>
                          <path d="M11 1.83337C9.06774 1.83328 7.2135 2.59582 5.84033 3.95527C4.46715 5.31471 3.68601 7.16119 3.66669 9.09337C3.66669 14.1167 10.1292 19.7084 10.4042 19.9467C10.5702 20.0887 10.7815 20.1668 11 20.1668C11.2185 20.1668 11.4298 20.0887 11.5959 19.9467C11.9167 19.7084 18.3334 14.1167 18.3334 9.09337C18.314 7.16119 17.5329 5.31471 16.1597 3.95527C14.7865 2.59582 12.9323 1.83328 11 1.83337ZM11 11.9167C10.3655 11.9167 9.74517 11.7285 9.21757 11.376C8.68996 11.0235 8.27874 10.5224 8.03591 9.93615C7.79308 9.3499 7.72954 8.70481 7.85333 8.08246C7.97713 7.4601 8.28269 6.88843 8.73139 6.43974C9.18008 5.99105 9.75175 5.68548 10.3741 5.56169C10.9965 5.43789 11.6415 5.50143 12.2278 5.74426C12.814 5.98709 13.3151 6.39831 13.6677 6.92592C14.0202 7.45353 14.2084 8.07382 14.2084 8.70837C14.2084 9.55928 13.8703 10.3753 13.2687 10.977C12.667 11.5787 11.8509 11.9167 11 11.9167Z" fill="currentColor"></path>
                        </svg>{el.location}</p>
              <div className="cardLine"></div>
              <p className="date"><svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                              <path d="M19.25 18.3333V5.5C19.25 4.48892 18.4278 3.66667 17.4167 3.66667H15.5833V1.83334H13.75V3.66667H8.25V1.83334H6.41667V3.66667H4.58333C3.57225 3.66667 2.75 4.48892 2.75 5.5V18.3333C2.75 19.3444 3.57225 20.1667 4.58333 20.1667H17.4167C18.4278 20.1667 19.25 19.3444 19.25 18.3333ZM8.25 16.5H6.41667V14.6667H8.25V16.5ZM8.25 12.8333H6.41667V11H8.25V12.8333ZM11.9167 16.5H10.0833V14.6667H11.9167V16.5ZM11.9167 12.8333H10.0833V11H11.9167V12.8333ZM15.5833 16.5H13.75V14.6667H15.5833V16.5ZM15.5833 12.8333H13.75V11H15.5833V12.8333ZM17.4167 8.25H4.58333V6.41667H17.4167V8.25Z" fill="currentColor"></path>
                            </svg>{el.date}</p>
              <button>
               <p className="price"> {el.price}</p>
                <svg width="100%" height="100%" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.79711 21.4957C4.60834 21.4953 2.70061 20.0055 2.16983 17.8821L0.030305 9.33115C-0.0435403 9.04515 0.0192477 8.74108 0.200334 8.50772C0.381421 8.27436 0.660383 8.13803 0.955762 8.13855H4.98198L6.70886 1.22147C6.79408 0.89084 7.04921 0.630783 7.37816 0.539264C7.7071 0.447746 8.05988 0.538669 8.30361 0.777784C8.54734 1.0169 8.64499 1.36788 8.55978 1.69851L6.94738 8.13855H15.9539L14.3415 1.69851C14.2563 1.36788 14.3539 1.0169 14.5977 0.777784C14.8414 0.538669 15.1942 0.447746 15.5231 0.539264C15.8521 0.630783 16.1072 0.89084 16.1924 1.22147L17.9193 8.13855H21.9455C22.2397 8.13786 22.5177 8.27292 22.6991 8.50458C22.8804 8.73624 22.9447 9.03859 22.8734 9.324L20.7267 17.8821C20.1959 20.0055 18.2882 21.4953 16.0994 21.4957H6.79711ZM18.881 17.4194L20.7247 10.0467H2.17743L4.02596 17.4194C4.34443 18.6935 5.48907 19.5873 6.80233 19.5875H16.1046C17.4179 19.5873 18.5625 18.6935 18.881 17.4194Z" fill="currentColor"></path>
                              </svg>
              </button>
             </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CitiesDetail;
