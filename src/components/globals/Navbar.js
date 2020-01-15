import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const state = {
  links: [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ],
}

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const navbarHandler = () => {
    if (navOpen) {
      setCss("collapse navbar-collapse")
      setNavOpen(false)
    } else {
      setCss("collapse navbar-collapse show")
      setNavOpen(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-atuo">
          {state.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
