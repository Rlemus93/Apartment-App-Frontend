import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const ryanLink = screen.getByText("Ryan Lemus")
  const sethLink = screen.getByText("Seth Crist")

  expect(ryanLink).toHaveAttribute("href", "https://github.com/Rlemus93")
  expect(sethLink).toHaveAttribute("href", "https://github.com/sethcrist")
})
