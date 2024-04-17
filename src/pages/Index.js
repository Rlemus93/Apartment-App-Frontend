import React from "react"

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"
import Map from "../components/Map"

const Index = ({ apartments }) => {
  return (
    <>
      <h1 className="index-title">Available Homes</h1>
      <div className="index-cont">
        <div className="content-wrapper">
          <div className="index-cards">
            {apartments.map((apartment) => (
              <Card
                key={apartment.id}
                style={{
                  width: "25rem",
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
                  <Link to={`/show/${apartment.id}`} className="learn-more">
                    <Button>See More</Button>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        <div className="map-cont">
          <div className="map-canvas">
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
