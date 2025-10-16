import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

export default function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
