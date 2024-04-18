import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn"

test("renders SignIn component", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Sign In/)
  expect(signInTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Email/)
  expect(username).toBeInTheDocument()

  const password = screen.getByLabelText(/Password/)
  expect(password).toBeInTheDocument()

  const submitButton = screen.getByText("Sign In")
  expect(submitButton).toBeInTheDocument()
})
