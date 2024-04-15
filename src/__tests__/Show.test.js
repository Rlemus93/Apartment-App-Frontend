import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Show from "../pages/Show"
import mockApartments from "../mockApartments"

test("renders Show component ", () => {
  render(
    <MemoryRouter initialEntries={["/show/1"]}>
      <Routes>
        <Route path="show/:id" element={<Show apartments={mockApartments} />} />
      </Routes>
    </MemoryRouter>
  )

  const apt = mockApartments.find((aptObject) => aptObject.id === 1)

  const aptImage = screen.getByAltText(`Photo of house ${apt.street}`)
  expect(aptImage).toBeInTheDocument()
  expect(aptImage).toHaveAttribute("src", apt.image)

  const aptTitleInfo = screen.getByText(
    `${apt.street}, ${apt.unit}, ${apt.city}, ${apt.state}`
  )
  expect(aptTitleInfo).toBeInTheDocument()

  const aptSubInfo = screen.getAllByText(
    new RegExp(
      `Bedrooms: ${apt.bedrooms} | Bathrooms: ${apt.bathrooms} | Square Footage: ${apt.square_footage} | Price: \\$${apt.price}`
    )
  )

  const backButton = screen.getAllByRole("link", { name: "Back" })
  backButton.forEach((linkElement) => {
    expect(linkElement).toHaveAttribute("href", `/index`)
  })
})
