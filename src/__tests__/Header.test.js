import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

test("renders Header component logo and appropriate links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const logo = screen.getByAltText(/apartment logo of a gold bull/i)
  expect(logo).toBeInTheDocument()

  const availableApartmentLink = screen.getByText(/available homesteads/i)
  expect(availableApartmentLink).toBeInTheDocument()
  expect(availableApartmentLink.getAttribute("href")).toBe("/apartments")

  const signInLink = screen.getByText(/sign in/i)
  expect(signInLink).toBeInTheDocument()
  expect(signInLink.getAttribute("href")).toBe("/signin")

  const joinNowLink = screen.getByText(/join now/i)
  expect(joinNowLink).toBeInTheDocument()
  expect(joinNowLink.getAttribute("href")).toBe("/joinnow")
})
