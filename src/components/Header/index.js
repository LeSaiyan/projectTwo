import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import HomeLogo from "../../assets/images/travel.png"
import "./header.scss"

const Header = () => {
  const identity = useIdentityContext()
  //state local
  const [dialog, setDialog] = React.useState(false)

  console.log(identity)

  const isLoggedIn = identity && identity.isLoggedIn
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.css"
        />
        <div
          id="snipcart"
          data-api-key="NWI2MThmM2UtNWJlNy00ZjQxLWE4ZWQtYWUwNjkwMjk5YmQzNjM3MjY3OTQwMzIwNDYxNzgw"
          hidden
        ></div>
        <script src="https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.js"></script>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">
                <img className="logo" src={HomeLogo} />
              </Link>
            </li>
            <Link to="/products">
              <li className="nav__item">Eshop</li>
            </Link>
            <Link to="/contact">
              <li className="nav__item">Contact</li>
            </Link>
            <Link to="/blog">
              <li className="nav__item">Blog</li>
            </Link>
            <Link to="/user">
              <li className="nav__item">User</li>
            </Link>
            {isLoggedIn ? (
              <li>
                <button class="header__checkout snipcart-checkout">oui</button>
                <span class="snipcart-total-price">$0.00</span>(
                <span class="snipcart-items-count">0</span>)
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="toolbar">
          <button className="btn" onClick={() => setDialog(true)}>
            {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
          </button>
        </div>
      </header>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </div>
  )
}

export default Header
