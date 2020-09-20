import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
//import { VideoView } from './Views/VideoView';
//import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const DripDrop = () => {
  const text = "A winning social sustainability solution to water wastage, DripDrop is like a 'FitBit' for your faucets."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text} />
    </div>
  )
}
