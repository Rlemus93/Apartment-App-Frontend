import React from "react"
import { useParams } from "react-router-dom"

const Show = ({ apartments }) => {
  const { id } = useParams()
  const apt = apartments.find((aptObject) => aptObject.id === +id)
  return (
    <div className="show-cont">
      <div className="show-title">
        <h1>Welcome To {apt.street}</h1>
      </div>
    </div>
  )
}

export default Show
