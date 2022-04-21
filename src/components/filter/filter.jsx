import { Button } from "@mui/material";
import React, { useState } from "react";
import CardTotal from "./cardTotal/cardTotal";
import TabFilter from "./tabFilter/tabFilter";
import filter from "../../assets/images/icons8-slider-90.png";
import "./filter.scss";
import PositionedMenu from "./menuFilter/menuFilter";

const Filter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="filter">
      <div className="filter-card">
        <CardTotal />
      </div>
      <div className="filter-tabs">
        <TabFilter />
        <button
          className="filter-buttom"
          id="demo-positioned-button"
          onClick={handleClick}
        >
          FILTRAR
          <img className="filter-buttom-img" src={filter} alt="filter" />
        </button>
        {open && <PositionedMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        />}
      </div>
    </div>
  );
};

export default Filter;
