import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import bold from "../../assets/images/logo-bold.png";
import "./header.scss"

export const Header = () => {
  return (
    <header className='header'>
        <figure className='header-logo'>
            <img className='header-logo' src={bold} alt="logo-bold" />
        </figure>
        <ul className='header-nav'>
            <li className='header-nav-elemet'>Mi negocio</li>
            <li className='header-nav-elemet'>Ayuda <HelpOutlineIcon/></li>
        </ul>
    </header>
  )
}
