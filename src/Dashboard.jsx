import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", height:"100vh", width:"100%"}}>
        <Sidenav/>
        <div style={{height:"100vh", width:"80%"}}>
            <Navbar/>
            <div>
             <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard