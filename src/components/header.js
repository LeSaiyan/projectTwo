import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/products">Eshop</Link>
        </li>
        <li className="nav__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <div className="toolbar"></div>
  </header>
)

export default Header
