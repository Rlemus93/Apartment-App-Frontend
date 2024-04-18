import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
import farmhouse2 from "../assets/farmhouse2.jpg"
import farm from "../assets/farm.jpg"
import cows from "../assets/cows.jpg"

const Home = ({ apartments }) => {
  return (
    <div className="home-cont">
      <div className="home-title">
        <h1 className="title-h1">
          Find Your Peaceful Retreat with{" "}
          <span className="homestead-living">
            <u>HOMESTEAD LIVING</u>
          </span>
        </h1>
      </div>
      <div className="home-cont-2">
        <div className="sub-header">
          <h3
            style={{
              fontFamily: "PT Serif, serif",
              fontSize: "2.5rem",
              color: "black",
              fontWeight: "700",
            }}
          >
            Explore Rentals
          </h3>
        </div>
        <div className="home-cards">
          {apartments.slice(0, 4).map((apartment) => (
            <Card
              key={apartment.id}
              style={{
                width: "18rem",
              }}
            >
              <img
                alt={`Photo of house ${apartment.street}`}
                src={apartment.image}
                className="card-img-top"
              />
              <CardBody>
                <CardTitle tag="h5">{apartment.street}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {apartment.city}, {apartment.state}
                </CardSubtitle>
                <CardText>
                  {apartment.bedrooms} beds | {apartment.bathrooms} bath | $
                  {apartment.price}
                </CardText>
              </CardBody>
            </Card>
          ))}
        </div>
        <NavLink to="/index" className="learn-more">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">View More</span>
          </button>
        </NavLink>
      </div>
      <div className="home-cont-3">
        <h3
          className="sub-header"
          style={{
            fontFamily: "PT Serif, serif",
            fontSize: "2.5rem",
            color: "black",
            fontWeight: "700",
          }}
        >
          The Perfect Place to Manage Your Property
        </h3>
        <h4
          style={{
            fontFamily: "PT Serif, serif",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          {" "}
          Let us Handle renting out your Home! Its never been easier with{" "}
          <u>HOMESTEAD LIVING</u>
        </h4>
        <div style={{ display: "flex", paddingTop: "2rem" }}>
          <Card
            style={{
              width: "45rem",
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "0%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardTitle
              style={{
                fontFamily: "PT Serif, serif",
                fontSize: "2rem",
                color: "#cba86b",
                fontWeight: "800",
              }}
              tag="h5"
            >
              Renting your Homestead now Easy
            </CardTitle>
            <CardText
              style={{ fontFamily: "PT Serif, serif", fontSize: "1.5rem" }}
            >
              Simplifying the Rental Experience: Explore top-tier listings,
              complete applications online, sign leases seamlessly, and
              conveniently manage rent payments—all from any device.
            </CardText>
            <Link
              to="/signup"
              style={{
                color: "#cba86b",
                fontFamily: "PT Serif, serif",
                fontSize: "1.5em",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderBottom = "2px solid #cba86b"
              }} // Add underline on hover
              onMouseLeave={(e) => {
                e.target.style.borderBottom = "2px solid transparent"
              }} // Remove underline on mouse leave
            >
              Become a Member
            </Link>
          </Card>
          <Card style={{ width: "45rem", borderRadius: "0%" }}>
            <img alt="Sample" src={farmhouse2} />
          </Card>
        </div>
      </div>
      <div className="home-cont-4">
        <h3
          className="sub-header"
          style={{
            fontFamily: "PT Serif, serif",
            fontSize: "2.5rem",
            color: "black",
            fontWeight: "700",
          }}
        >
          Benefits to Homestead
        </h3>
        <div style={{ display: "flex", paddingTop: "2rem" }}>
          <Card
            style={{
              width: "45rem",
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "0%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardTitle
              style={{
                fontFamily: "PT Serif, serif",
                fontSize: "2rem",
                color: "#cba86b",
                fontWeight: "800",
              }}
              tag="h5"
            >
              Healthier Lifestyle
            </CardTitle>
            <CardText
              style={{ fontFamily: "PT Serif, serif", fontSize: "1.3rem" }}
            >
              Living a homesteading lifestyle often involves physical labor and
              outdoor activities, leading to increased physical fitness and
              overall well-being.
            </CardText>
          </Card>
          <Card style={{ width: "45rem", borderRadius: "0%" }}>
            <img alt="Sample" src={farm} />
          </Card>
        </div>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "45rem", borderRadius: "0%" }}>
            <img alt="Sample" src={cows} />
          </Card>
          <Card
            style={{
              width: "45rem",
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "0%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardTitle
              style={{
                fontFamily: "PT Serif, serif",
                fontSize: "2rem",
                color: "#cba86b",
                fontWeight: "800",
              }}
              tag="h5"
            >
              Self-Sufficiency:
            </CardTitle>
            <CardText
              style={{ fontFamily: "PT Serif, serif", fontSize: "1.4rem" }}
            >
              Homesteading allows individuals to become more self-sufficient by
              growing their own food, raising livestock, and producing their own
              energy, reducing reliance on external resources.
            </CardText>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
