import React from 'react'

function Header() {
  return (
    <header>
      <div class="header_content">
        <div class="header_logo">
          <a href="gg">Muteza</a>
        </div>
        <ul class="header_links">
          <li><a href="f">Product</a></li>
          <li><a href="f">How It Works</a></li>
          <li><a href="f">Reviews</a></li>
        </ul>
        <div class="header_cta">
          <a class="btn_register" href="f">Sign Up/in</a>
          <button class="btn_started"><a href="f">Get Started</a></button>
          <button class="btn_burger"><a href="f">Menu</a></button>
        </div>
      </div>
    </header>
  )
}

export default Header