import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'

export const StepStore = () => {
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
    </div>
  )
}
