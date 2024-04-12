import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Index from "../pages/Index"
import mockApartments from "../mockApartments"

test("renders Home component ", () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  )

  const header = screen.getByText("Available Homes")
  expect(header).toBeInTheDocument()

  mockApartments.forEach((apartment) => {
    const aptImage = screen.getByAltText(`Photo of house ${apartment.street}`)
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

  const seeMoreButtons = screen.getAllByRole("link", { name: "See More" })
  seeMoreButtons.forEach((linkElement, index) => {
    expect(linkElement).toHaveAttribute(
      "href",
      `/show/${mockApartments[index].id}`
    )
  })
})
