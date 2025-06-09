import React from 'react'
import { useNavigate } from 'react-router-dom'
import {NAV_BAR_DATA} from "../utils/nav-bar-data";
import "./styles/NavBar.css"

const NavBar = ({activeMenu}) => {

    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    }

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                {NAV_BAR_DATA.map((item) => (
                    <button key={item.id} onClick={() => handleClick(item.path)} className={`navbar-button ${activeMenu == item.label ? "active-menu" : ""}`}>{item.label}</button>
                ))}
            </div>
        </nav>
    </>
  )
}

export default NavBar