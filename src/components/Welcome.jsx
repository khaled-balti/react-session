import React from 'react'
import { Outlet } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
        <div>Welcome To Our Users</div>
        <Outlet/>
    </>
  )
}

export default Welcome