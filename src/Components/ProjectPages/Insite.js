import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { TextView } from './Views/TextView';

export const Insite = () => {
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <TextView text="COMING SOON" />
    </div>
  )
}
