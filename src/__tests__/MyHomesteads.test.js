import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyHomesteads from "../pages/MyHomesteads"
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers"

test("renders Home component ", () => {
  render(
    <BrowserRouter>
      <MyHomesteads apartments={mockApartments} currentUser={mockUsers[0]} />
    </BrowserRouter>
  )

  const myHomesteads = mockApartments.filter(
    (apt) => apt.user_id === mockUsers[0].id
  )

  const header = screen.getByText("Your Homesteads")
  expect(header).toBeInTheDocument()

  myHomesteads.forEach((apartment) => {
    const aptImage = screen.getByAltText(
      `Photo of my house ${apartment.street}`
    )
    expect(aptImage).toBeInTheDocument()
    expect(aptImage).toHaveAttribute("src", apartment.image)

    const aptstreet = screen.getByText(apartment.street)
    expect(aptstreet).toBeInTheDocument()

    const aptstate = screen.getByText(`${apartment.city}, ${apartment.state}`)
    expect(aptstate).toBeInTheDocument()

    const aptcity = screen.getAllByText(
      new RegExp(
        `${apartment.bedrooms} beds | ${apartment.bathrooms} bath | \\$${apartment.price}`
      )
    )
  })

  const editButtons = screen.getAllByRole("link", { name: "Edit" })
  editButtons.forEach((linkElement) => {
    expect(linkElement).toHaveAttribute("href", "/edit/:id")
  })

  const deleteButtons = screen.getAllByRole("button", { name: "Delete" })
  deleteButtons.forEach((deleteButton) => {
    expect(deleteButton).toBeInTheDocument()
  })

  const addHomesteadButton = screen.getByRole("link", {
    name: "Add Homestead",
  })
  expect(addHomesteadButton).toBeInTheDocument()
  expect(addHomesteadButton).toHaveAttribute("href", "/new")
})
