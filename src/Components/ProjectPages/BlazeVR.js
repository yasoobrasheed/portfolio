import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
//import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const BlazeVR = () => {
  const text = "Ah yes, my first foray into Arduino. Here, I use a peltier element and an ultrasonic sensor to create a simple VR game."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <VideoView vidLink="https://www.youtube.com/embed/_O1eylldazc"/>
    </div>
  )
}
