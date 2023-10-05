import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../images/logo-beyaz.svg";
import UserIcon from "../../images/UserIcon.png" 
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (props) => { // props parametresi doğrudan alınır, `{}` içine gerek yok
  const [size, setSize] = useState("large");
  const navigate = useNavigate();
  const { isLoggedin } = useSelector((state) => state.app);
  const userStorageData = JSON.parse(localStorage.getItem("userData"))
  // console.log(isLoginName)

  const handleClick = () => {
    navigate(`/signUp`);
  };
  const handleClickTwo = () => {
    navigate(`/login`);
  };

  const handleClickHome = () =>{
    navigate('/')
  }
  const handleClickMember = () =>{
    navigate('/memberProfile')
  }


  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" onClick={handleClickHome}/> 
      <p className="propsText">{props.text}</p> 
      <p className="propsText">{props.textLogin}</p>
      {isLoggedin ?
          <div className='profileHeader' onClick={handleClickMember}>
            <p>Hoşgeldin {userStorageData.user.name}</p>
            <img src={UserIcon}/>
          </div>
        :
        <div className="login">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button onClick={handleClick} value="large">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
            </svg>
            Üye Ol
          </Radio.Button>
          <Radio.Button value="small" onClick={handleClickTwo}>
            →| Üye Girişi
          </Radio.Button>
        </Radio.Group>
      </div>
      }
    </div>
  );
};

export default Header;