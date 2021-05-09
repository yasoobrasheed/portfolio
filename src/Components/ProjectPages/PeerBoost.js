import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const PeerBoost = () => {
  const text = "A UChicago Booth New Venture Challenge finalist that connects companies with microinfluencers."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <TextView text={"A fun little venture idea a friend and I had back in 2018. Below, you can see the pitch we made for the competition."} />
      <VideoView vidLink="https://www.youtube.com/embed/Q1e2BfABYPU"/>
    </div>
  )
}
