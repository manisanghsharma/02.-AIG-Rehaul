import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  )
}

export default App
