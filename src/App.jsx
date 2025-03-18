import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import "@fontsource/inter"; 

const App = () => {
  return (
    <Router>
      <div className="parent-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App