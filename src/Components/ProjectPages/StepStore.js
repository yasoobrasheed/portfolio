import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
//import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const StepStore = () => {
  const text = "What if you could fully charge your Apple Watch just by walking around? A scientific paper, exploring sustainable energy."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <VideoView vidLink="https://www.youtube.com/embed/f9bufZT8olY"/>
    </div>
  )
}
