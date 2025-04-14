import React from 'react'
import Menu from '../components/home/Menu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Menu/>
        <Outlet/>
    </div>
  )
}

export default Layout