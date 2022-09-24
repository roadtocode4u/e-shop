import React from 'react'
import Rtc from "./img/rtc-logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar-fix">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">
        <img src={Rtc} className="navLogo" alt="logo" />
      </a>
    </div>
    <p className="text-light logo-text">Shoppe-Savvy</p>
  </nav>
  )
}

export default NavBar