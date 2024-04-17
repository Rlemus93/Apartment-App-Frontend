import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Edit from "../pages/Edit"
import mockApartments from "../mockApartments.js"
import mockUsers from "../mockUsers"

test("renders Edit component", () => {
  render(
    <MemoryRouter initialEntries={["/edit/1"]}>
      <Routes>
        <Route
          path="/edit/:id"
          element={<Edit apartments={mockApartments} currentUser={mockUsers} />}
        />
      </Routes>
    </MemoryRouter>
  )
  const myHomesteads = mockApartments.find(
    (item) => item.id === mockUsers[0].id
  )

  const signInTitle = screen.getByText(/Edit Your Homestead/)
  expect(signInTitle).toBeInTheDocument()

  const street = screen.getByLabelText(/Street Address/)
  expect(street).toBeInTheDocument()
  const streetValue = screen.getByDisplayValue(myHomesteads.street)
  expect(streetValue).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()
  const unitValue = screen.getByDisplayValue(myHomesteads.unit)
  expect(unitValue).toBeInTheDocument()

  const city = screen.getByLabelText(/City/)
  expect(city).toBeInTheDocument()
  const cityValue = screen.getByDisplayValue(myHomesteads.city)
  expect(cityValue).toBeInTheDocument()

  const state = screen.getByLabelText(/State/)
  expect(state).toBeInTheDocument()
  const stateValue = screen.getByDisplayValue(myHomesteads.state)
  expect(stateValue).toBeInTheDocument()

  const squareFootage = screen.getByLabelText(/Square Footage/)
  expect(squareFootage).toBeInTheDocument()
  const sqfootValue = screen.getByDisplayValue(myHomesteads.square_footage)
  expect(sqfootValue).toBeInTheDocument()

  const price = screen.getByLabelText(/Monthly Rental Price/)
  expect(price).toBeInTheDocument()
  const priceValue = screen.getByDisplayValue(myHomesteads.price)
  expect(priceValue).toBeInTheDocument()

  const bedrooms = screen.getByLabelText(/Bedrooms/)
  expect(bedrooms).toBeInTheDocument()
  const bedroomValue = screen.getByDisplayValue(myHomesteads.bedrooms)
  expect(bedroomValue).toBeInTheDocument()

  const bathrooms = screen.getByLabelText(/Bathrooms/)
  expect(bathrooms).toBeInTheDocument()
  const bathroomValue = screen.getByDisplayValue(myHomesteads.bathrooms)
  expect(bathroomValue).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pet Policy/)
  expect(pets).toBeInTheDocument()
  const petValue = screen.getByDisplayValue(myHomesteads.pets)
  expect(petValue).toBeInTheDocument()

  const about = screen.getByLabelText(/Tell Us About Your Homestead/)
  expect(about).toBeInTheDocument()
  const aboutValue = screen.getByDisplayValue(myHomesteads.about)
  expect(aboutValue).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()
  const imageValue = screen.getByDisplayValue(myHomesteads.image)
  expect(imageValue).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
