import React from "react";
import "./LeftBox.scss";
import Logo from "../../images/logo-beyaz.svg";
import { Input } from "antd";

const LeftBox = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="leftbox-menu">
      <div className="leftbox-logo">
        <img src={Logo} />
      </div>
      <div className="leftbox-search">
        <Search
          className="leftbox-search"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
            height: 32,
          }}
        />
      </div>
      <div className="leftbox-title">
        <h1>Şehir Seç</h1>
        <h2>Bubilet'te şehrine özel tüm etkinlikler bir tık uzağında!</h2>
        <p>Şehrini seçip eğlenceye başla.</p>
      </div>
      <div className="leftbox-button">
      <button className="leftbox-close">Kapat</button>
      </div>
    </div>
  );
};

export default LeftBox;
