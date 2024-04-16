import "./App.css"
import React, { useState, useEffect } from "react"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import SignUp from "./pages/SignUp.js"
import SignIn from "./pages/SignIn.js"
import Home from "./pages/Home.js"
import Index from "./pages/Index.js"
import Show from "./pages/Show.js"
import Footer from "./components/Footer.js"
import NotFound from "./pages/NotFound.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const signIn = async (user) => {
    try {
      const signInResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!signInResponse) {
        throw new Error(signInResponse.errors)
      }
      const payload = await signInResponse.json()
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    } catch (error) {
      console.log("error fetching sign in data")
    }
  }

  const signUp = async (currentUser) => {
    try {
      const signUpResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(currentUser),
      })
      if (!signUpResponse) {
        throw new Error(signUpResponse.errors)
      }
      const payload = await signUpResponse.json()
      localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
    } catch (error) {
      console.log("error fetching sign up data")
    }
  }

  const signOut = async () => {
    try {
      const signOutResponse = await fetch("http://localhost:3000/logout", {
        medod: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      if (!signOutResponse) {
        throw new Error(signOutResponse.errors)
      }
      await signOutResponse.json()
      setCurrentUser(null)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } catch (error) {
      console.log("error fetching log out data")
    }
  }

  return (
    <>
      <Header currentUser={currentUser} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index apartments={apartments} />} />
        <Route path="/show/:id" element={<Show apartments={apartments} />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
