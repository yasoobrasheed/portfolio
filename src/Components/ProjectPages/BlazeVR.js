import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'

export const BlazeVR = () => {
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
    </div>
  )
}
