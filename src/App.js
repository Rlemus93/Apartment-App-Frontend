import "./App.css"
import React from "react"
// import mockUsers from "./mockUsers.js"
// import mockApartments from "./mockApartments.js"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Home from "./pages/Home.js"
import Index from "./pages/Index.js"
import Footer from "./components/Footer.js"
import NotFound from "./pages/NotFound.js"

const App = () => {
  // const [currentUser, setCurrentUser] = useState(mockUsers[0])
  // const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
