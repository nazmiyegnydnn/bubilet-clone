import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../images/logo-beyaz.svg";
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (props) => { // props parametresi doğrudan alınır, `{}` içine gerek yok
  const [size, setSize] = useState("large");
  const navigate = useNavigate();
  const { isLoginName } = useSelector((state) => state.app);

  console.log(isLoginName)

  const handleClick = () => {
    navigate(`/signUp`);
  };
  const handleClickTwo = () => {
    navigate(`/login`);
  };
  return (
    <div className="header">
      <img src={Logo} alt="Logo" /> 
      <p className="propsText">{props.text}</p> 
      <p className="propsText">{props.textLogin}</p>
      {isLoginName !== "" ?
          <div className='profileHeader'>
            <p>Hoşgeldiniz {isLoginName}</p>
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
              {/* SVG içeriği */}
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