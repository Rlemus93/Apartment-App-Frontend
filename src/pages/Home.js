import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import mockApartments from "../mockApartments"
import { NavLink } from "react-router-dom"
import Map from "../components/Map"

const Home = () => {
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
        {mockApartments.slice(0, 4).map((apartment) => (
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

      <div>
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
        <hr style={{ width: "85vw", backgroundColor: "darkgray" }} />
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
        <Map />
      </div>
    </div>
  )
}

export default Home
