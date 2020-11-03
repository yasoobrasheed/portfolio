import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const DripDrop = () => {
  const text = "A winning social sustainability solution to water wastage, DripDrop is a FitBit for your faucets."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text} />
      <TextView text={"Coming Soon! Check out some of my other projects in the meantime."} />
    </div>
  )
}
