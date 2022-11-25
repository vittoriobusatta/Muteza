import React from 'react'
import logo from "../assets/icons/logo.png"

function Header() {
  return (
    <header>
      <div className="header_content">
        <div className="header_logo">
          <a href="/#">Muteza</a>
          <img className='mobile_logo' src={logo} alt="logo" />
        </div>
        <ul className="header_links">
          <li><a href="/#">Product</a></li>
          <li><a href="/#">How It Works</a></li>
          <li><a href="/#">Reviews</a></li>
        </ul>
        <div className="header_cta">
          <a className="btn_register" href="/#">Sign Up/in</a>
          <button className="btn_started"><a href="/#">Get Started</a></button>
          <button className="btn_burger"><a href="/#">Menu</a></button>
        </div>
      </div>
    </header>
  )
}

export default Header