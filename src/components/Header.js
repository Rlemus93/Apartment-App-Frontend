import "bootstrap/dist/css/bootstrap.min.css"
import homesteadLogo from "../assets/HomeSteadLiving.png"
import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Nav className="nav-cont" navbar>
      <div className="logo-cont">
        <NavLink to="/" className="nav-link">
          <img
            src={homesteadLogo}
            alt="apartment logo of a gold bull"
            className="homestead-logo"
          />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/apartments" className="nav-link">
          Available Homesteads
        </NavLink>
        <NavLink to="/signin" className="nav-link">
          Sign In
        </NavLink>
        <NavLink to="/joinnow" className="nav-link">
          Join Now
        </NavLink>
      </div>
    </Nav>
  )
}

export default Header
