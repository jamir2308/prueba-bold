import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { ListItemText } from "@mui/material";
import "./menuFilter.scss"

export default function PositionedMenu({ open, handleClose, anchorEl }) {
  return (
    <div>
      <Menu
      className="menu"
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="menu-title">FILTRAR</div>
        <MenuItem className="menu-text-bold">
          <Checkbox /> Cobro con datáfono
        </MenuItem>
        <MenuItem className="menu-text-bold">
        <Checkbox />Cobros con lin de pago
        </MenuItem>
        <MenuItem className="menu-text-bold">
        <Checkbox />ver todos
        </MenuItem>

        <MenuItem className="menu-container-button" onClick={handleClose}>
          <button className="menu-buttom" id="demo-positioned-button">
            Aplicar
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
}
