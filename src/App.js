import "./App.css"
import React, { useState } from "react"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import HomeSteadLiving from "./assets/HomeSteadLiving.png"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <h3>Apartment App</h3>
      <img src={HomeSteadLiving} />
    </>
  )
}

export default App
