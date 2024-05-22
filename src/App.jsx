import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App