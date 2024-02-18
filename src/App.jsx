import { useState } from 'react'
import { motion } from "framer-motion"
import './App.css'
import Landing from './components/Landing'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Landing></Landing>
      <Footer></Footer>
    </>
  )
}

export default App
