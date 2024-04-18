import { render, screen, within } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import mockApartments from "../mockApartments"

test("renders Home component ", () => {
  render(
    <BrowserRouter>
      <Home apartments={mockApartments} />
    </BrowserRouter>
  )

  const homeTitle = screen.getByRole("heading", {
    name: /Find Your Peaceful Retreat with/i,
  })
  const homesteadLivingSpan = within(homeTitle).getByText("HOMESTEAD LIVING", {
    exact: false,
  })
  expect(homesteadLivingSpan).toBeInTheDocument()

  const subHeaderOne = screen.getByText("Explore Rentals")
  expect(subHeaderOne).toBeInTheDocument()

  mockApartments.slice(0, 4).forEach((apartment) => {
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

  const viewMoreButton = screen.getByText("View More")
  expect(viewMoreButton).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "View More" })).toHaveAttribute(
    "href",
    "/index"
  )

  const subHeaderTwo = screen.getByText(
    "The Perfect Place to Manage Your Property"
  )
  expect(subHeaderTwo).toBeInTheDocument()

  const subHeaderThree = screen.getByText("Benefits to Homestead")
  expect(subHeaderThree).toBeInTheDocument()
})
