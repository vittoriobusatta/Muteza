import React from 'react'

function Header() {
  return (
    <header>
      <div className="header_content">
        <div className="header_logo">
          <a href="gg">Muteza</a>
        </div>
        <ul className="header_links">
          <li><a href="f">Product</a></li>
          <li><a href="f">How It Works</a></li>
          <li><a href="f">Reviews</a></li>
        </ul>
        <div className="header_cta">
          <a className="btn_register" href="f">Sign Up/in</a>
          <button className="btn_started"><a href="f">Get Started</a></button>
          <button className="btn_burger"><a href="f">Menu</a></button>
        </div>
      </div>
    </header>
  )
}

export default Header