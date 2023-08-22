import React from "react";
import "./LeftBox.scss";
import Logo from "../images/logo-beyaz.svg";
import { Input ,Space } from "antd";

const LeftBox = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="leftBox">
      <div className="leftBox-logo">
        <img src={Logo} />
        <Space direction="vertical">
        <Search
        className="leftBox-search"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
            height: 32,
          }}
        />
        </Space>
      </div>
    </div>
  );
};

export default LeftBox;
