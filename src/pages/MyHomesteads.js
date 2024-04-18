import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"

const MyHomesteads = ({ apartments, currentUser, deleteHomeStead }) => {
  const navigate = useNavigate()
  const myHomesteads = apartments.filter(
    (apt) => apt.user_id === currentUser.id
  )

  const handledeleteHomeStead = (id) => {
    alert("Are you sure you want to delete this homestead?")
    deleteHomeStead(id)
    navigate("/myhomesteads")
  }

  return (
    <div className="myhomestead-cards-set">
      <h1 className="my-homestead-title">Your Homesteads</h1>
      <div className="index-cards">
        {myHomesteads?.map((apartment) => (
          <Card
            key={apartment.id}
            style={{
              width: "25rem",
              backgroundColor: "rgba(0,0,0,0.1)",
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
              <Link to={`/edit/${apartment.id}`}>
                <button className="new-edit-button">Edit</button>
              </Link>
              <button
                className="new-edit-button"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => handledeleteHomeStead(apartment.id)}
              >
                Delete
              </button>
            </CardBody>
          </Card>
        ))}
      </div>
      <Link to="/new" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <button className="new-edit-button">Add Homestead</button>
        </div>
      </Link>
    </div>
  )
}

export default MyHomesteads
