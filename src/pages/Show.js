import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"
import { Link } from "react-router-dom"

const Show = ({ apartments, currentUser }) => {
  const { id } = useParams()
  const apt = apartments.find((aptObject) => aptObject.id === +id)

  return (
    <div className="show-cont">
      <div className="card-div">
        <Card key={apt.id} style={{ textAlign: "center" }}>
          <CardImg
            alt={`Photo of house ${apt.street}`}
            src={apt.image}
            style={{ height: "60vh" }}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              {apt.street}, {apt.unit}, {apt.city}, {apt.state}
            </CardTitle>
            <CardText>
              Bedrooms: {apt.bedrooms} | Bathrooms: {apt.bathrooms} | Square
              Footage: {apt.square_footage} | Price: ${apt.price}
            </CardText>
            <CardText>
              <small className="text-muted">Pets Allowed: {apt.pets}</small>
            </CardText>
          </CardBody>
          <div className="center-content">
            <Link to="/index" className="learn-more">
              <button className="new-edit-button">Back</button>
            </Link>
            {currentUser && currentUser.id === apt.user_id && (
              <Link to={`/edit/${id}`} className="learn-more">
                <button className="new-edit-button">Edit</button>
              </Link>
            )}
          </div>
        </Card>
      </div>
      <div className="about-me-div">
        <h1>About This Property</h1>
        <p className="about-para">{apt.about}</p>
      </div>
    </div>
  )
}

export default Show
