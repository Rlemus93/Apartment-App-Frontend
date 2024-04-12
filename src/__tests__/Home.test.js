import { render, screen, within } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders Home component ", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  const homeTitle = screen.getByRole("heading", {
    name: /Find Your Peaceful Retreat with/i,
  })
  const homesteadLivingSpan = within(homeTitle).getByText("HOMESTEAD LIVING", {
    exact: false,
  })
  expect(homesteadLivingSpan).toBeInTheDocument()
})
