import React from "react";
import "./LeftBox.scss";
import Logo from "../../images/logo-beyaz.svg";
import { Input, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { filterCities } from "../../appSlice";
import { useDispatch } from "react-redux";

const LeftBox = () => {
  const dispatch = useDispatch();
  const onSearch = (value) => console.log(value);

  return (
    <div className="leftbox-menu">
      <div className="leftbox-logo">
        <img src={Logo} />
      </div>
      <div className="leftBox-search">
        <Input
          placeholder="Şehir Ara"
          onSearch={onSearch}
          onChange={(e) => dispatch(filterCities(e.target.value))}
        />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
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
