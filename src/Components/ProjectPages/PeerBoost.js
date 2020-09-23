import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const PeerBoost = () => {
  const text = "My first venture. A UChicago Booth New Venture Challenge finalist that connects clients with microinfluencers bent on selling their products."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <TextView text={"Coming Soon! Check out the video below in the meantime."} />
      <VideoView vidLink="https://www.youtube.com/embed/Q1e2BfABYPU"/>
    </div>
  )
}
