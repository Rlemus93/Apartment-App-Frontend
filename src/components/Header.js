import "bootstrap/dist/css/bootstrap.min.css"
import homesteadLogo from "../assets/HomeSteadLiving.png"
import React from "react"
import { Nav, Button } from "reactstrap"
import { Link, NavLink } from "react-router-dom"

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
        <NavLink to="/index" className="nav-link">
          Available Homesteads
        </NavLink>
        <NavLink to="/signin" className="nav-link">
          Sign In
        </NavLink>
        <Button
          tag={Link}
          to="/signup"
          className="nav-link"
          style={{
            borderRadius: "20px",
            padding: "10px 20px",
            backgroundColor: "#CBA86B",
            color: "black",
            border: "none",
            marginRight: "2rem",
          }}
        >
          Sign Up
        </Button>
      </div>
    </Nav>
  )
}

export default Header
