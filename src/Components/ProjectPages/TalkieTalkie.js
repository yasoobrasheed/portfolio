import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';

export const TalkieTalkie = () => {
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <VideoView vidLink="https://www.youtube.com/embed/VNmmXXDsZ6A"/>
    </div>
  )
}
