import "./App.css"
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import SignUp from "./pages/SignUp.js"
import SignIn from "./pages/SignIn.js"
import New from "./pages/New.js"
import Edit from "./pages/Edit.js"
import Home from "./pages/Home.js"
import Index from "./pages/Index.js"
import Show from "./pages/Show.js"
import Footer from "./components/Footer.js"
import NotFound from "./pages/NotFound.js"
import MyHomesteads from "./pages/MyHomesteads.js"

const App = () => {
  const [apartments, setApartments] = useState([])
  useEffect(() => {
    getApartments()
  }, [])
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

  const getApartments = async () => {
    try {
      const getResponse = await fetch("http://localhost:3000/apartments")
      if (!getResponse.ok) {
        throw new Error("Error on the get request for apartments")
      }
      const getResult = await getResponse.json()
      setApartments(getResult)
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  const createHomeStead = async (homesteadProfile) => {
    try {
      const postResponse = await fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(homesteadProfile),
      })
      if (!postResponse.ok) {
        throw new Error("Error on the post request for apartments")
      }
      await postResponse.json()
      getApartments()
    } catch (error) {
      alert("No homes! Something Went Wrong:", error.message)
    }
  }

  const updateHomeStead = async (editHomestead, id) => {
    try {
      const patchResponse = await fetch(
        `http://localhost:3000/apartments/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editHomestead),
        }
      )
      if (!patchResponse.ok) {
        throw new Error("Error on the post request for apartments")
      }
      await patchResponse.json()
      getApartments()
    } catch (error) {
      alert("No homes! Something Went Wrong:", error.message)
    }
  }

  const deleteHomeStead = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:3000/apartments/${id}`,
        {
          method: "DELETE",
        }
      )
      if (!deleteResponse.ok) {
        throw new Error("Error on the post request for apartments")
      }
      getApartments()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  return (
    <>
      <Header currentUser={currentUser} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home apartments={apartments} />} />
        <Route path="/index" element={<Index apartments={apartments} />} />
        <Route
          path="/show/:id"
          element={<Show apartments={apartments} currentUser={currentUser} />}
        />
        {currentUser && (
          <Route
            path="/myhomesteads"
            element={
              <MyHomesteads
                apartments={apartments}
                currentUser={currentUser}
                deleteHomeStead={deleteHomeStead}
              />
            }
          />
        )}
        {currentUser && (
          <Route
            path="/new"
            element={
              <New
                createHomeStead={createHomeStead}
                currentUser={currentUser}
              />
            }
          />
        )}
        {currentUser && (
          <Route
            path="/edit/:id"
            element={
              <Edit
                updateHomeStead={updateHomeStead}
                currentUser={currentUser}
                apartments={apartments}
              />
            }
          />
        )}
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
