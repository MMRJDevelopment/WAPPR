import React from 'react'
import Home from "../Pages/Home/Home"
import Topbar from "../components/Topbar/index"

export default function HomeLayout() {
  return (
    <div>
        <Topbar/>
        <Home/>
    </div>
  )
}
