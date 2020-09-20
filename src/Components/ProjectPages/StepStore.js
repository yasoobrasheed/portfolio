import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';

export const StepStore = () => {
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <VideoView vidLink="https://www.youtube.com/embed/f9bufZT8olY"/>
    </div>
  )
}
