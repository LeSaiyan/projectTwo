import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

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
