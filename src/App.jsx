
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sing-in" element={<SignIn />} />
      <Route path="/sing-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
