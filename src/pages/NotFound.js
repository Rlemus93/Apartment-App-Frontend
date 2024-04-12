import React from "react"
import notFoundImage from "../assets/404cow.png"

const NotFound = () => {
  return (
    <div className="not-found-cont">
      <img
        className="not-found-image"
        src={notFoundImage}
        alt='underneath text reading "404 error", animated cow smiling'
      />
    </div>
  )
}

export default NotFound
