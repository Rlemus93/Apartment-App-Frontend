import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import notFoundImage from "../assets/404cow.png"

test("renders the NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const notFoundHeroImage = screen.getByAltText(
    'underneath text reading "404 error", animated cow smiling "'
  )
  expect(notFoundHeroImage).toBeInTheDocument()
  expect(notFoundHeroImage).toHaveAttribute("src", notFoundImage)
})
