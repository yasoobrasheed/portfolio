import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';

export const StepStore = () => {
  const text = "What if you never needed to remove your apple watch? This here is a scientific paper exploring just how much energy your footsteps can generate."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text}/>
      <TextView text={"A theoretical presentation on the efficacy of body mounted energy generators."} />
      <VideoView vidLink="https://www.youtube.com/embed/f9bufZT8olY"/>
    </div>
  )
}
