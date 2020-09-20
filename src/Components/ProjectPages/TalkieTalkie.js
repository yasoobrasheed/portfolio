import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
//import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const TalkieTalkie = () => {
  const text = "A subsitute computer mouse for those who cannot physically hold one. My first attempt at using Human-Computer Interaction for good."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <VideoView vidLink="https://www.youtube.com/embed/VNmmXXDsZ6A"/>
    </div>
  )
}
