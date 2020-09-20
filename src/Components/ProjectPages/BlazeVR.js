import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';

export const BlazeVR = () => {
  const text = "Welcome to BlazeVR!"
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <VideoView vidLink="https://www.youtube.com/embed/_O1eylldazc"/>
    </div>
  )
}
