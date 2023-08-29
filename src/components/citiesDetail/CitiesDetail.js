import React, { useState } from "react";
import "./CitiesDetail.scss";
import Logo from "../../images/logo-beyaz.svg";
import sliderOne from "../../images/sliderOne.webp";
import sliderTwo from "../../images/sliderTwo.jpg";
import sliderThree from "../../images/sliderThree.jpg";
import sliderFour from "../../images/sliderFour.png";
import { SearchOutlined } from "@ant-design/icons";
import { Radio, Input, Tooltip, Button, Carousel } from "antd";
import { useParams } from "react-router-dom";


const CitiesDetail = () => {
  const [size, setSize] = useState("large"); // default is 'middle'
  const onSearch = (value) => console.log(value);
  const { name } = useParams(); // Parametre adını değiştirin, bu URL parametresiyle eşleşmelidir
 


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
      <Button>KONSER</Button>
      <Button>TİYATRO</Button>
      <Button>FESTİVAL</Button>
      <Button><p>STAND <span className="alt" >UP</span></p></Button>
      <Button>ÇOCUK AKTİVİTELERİ</Button>
      <Button>BLOG</Button>
      </div>
    </div>
  );
};

export default CitiesDetail;
