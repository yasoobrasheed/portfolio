import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
//import { VideoView } from './Views/VideoView';
//import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const Insite = () => {
  const text = "What if we could *carefully* use your location to give you discounts on products in your area? (Emphasis on carefully)"
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text} />
    </div>
  )
}
