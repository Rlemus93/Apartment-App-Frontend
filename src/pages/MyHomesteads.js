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

const MyHomesteads = ({ apartments, currentUser }) => {
  const myHomesteads = apartments.filter(
    (apt) => apt.user_id === currentUser.id
  )

  return (
    <div className="myhomestead-cards-set">
      <h1 className="index-title">Your Homesteads</h1>
      <div className="index-cards">
        {myHomesteads?.map((apartment) => (
          <Card
            key={apartment.id}
            style={{
              width: "25rem",
            }}
          >
            <img
              alt={`Photo of my house ${apartment.street}`}
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
              <Link to="/edit">
                <Button>Edit</Button>
              </Link>
              <Button>Delete</Button>
            </CardBody>
          </Card>
        ))}
      </div>
      <Link to="/new">
        <Button>Add Homestead</Button>
      </Link>
    </div>
  )
}

export default MyHomesteads
