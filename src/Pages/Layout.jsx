import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"

const Layout = () => {

  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout