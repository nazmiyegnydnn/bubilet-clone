import React from 'react'
import './SearchButton.scss'
import { Input, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import {
    filterEventsByName,
  } from "../../appSlice";

const searchButton = () => {
    const onSearch = (value) => console.log(value);
    const dispatch = useDispatch();

    
  const handleEventsClick = (title) => {
    dispatch(filterEventsByName(title));
  };


  return (
    <div>
         <div className="searchButton">
        <Input
          placeholder="Etkinlik, sanatçı veya mekan arayın"
          onSearch={onSearch}
          onChange={(e) => handleEventsClick(e.target.value)}
        />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
      </div>
    </div>
  )
}

export default searchButton