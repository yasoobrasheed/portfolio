import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';
import { ImageView } from './Views/ImageView';
import { HeaderView } from './Views/HeaderView';
import headset from './assets/headset.png'
import puredata from './assets/puredata.png'

export const TalkieTalkie = () => {
  const htext1 = "A subsitute computer mouse for those who cannot physically hold one. My first attempt at using Human-Computer Interaction for good."
  const text1 = "Our hands-free mouse is built using PureData, AppleScript, and Python. PureData is a visual programming language for working with multimedia (like sound) and it can interface with other scripts like AppleScript. AppleScript gives us easy control over Mac functions like mouse movement, but we leave the clicking to a Python package called Pyautogui. Check out a somewhat funny demo below (sound is recommended)."
  const htext2 = "Let's get into a bit of the nitty-gritty"
  const text2 = "We start with a simple mic attached to a headband. This mic is going to be the input for our sound into PureData. Below you'll see an example of what our PureData code looks like. The adc command converts our audio from the external mic, into digital. The fiddle command then searchs for a match to the sound that we've just inputted. Once a sound is matched (C4, E4, G4, and B4), we launch an AppleScript which commands the mouse to move in a certain direction. If you blurt out a loud pitched noise, a click event will be triggered."
  const text3 = "Before you launch our program, we require a few modifications on your end (i.e. activating AppleScript permissions). But other than the activating permissions and improving your singing skills a bit, you've got a working hands-free mouse!"

  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={htext1}/>
      <TextView text={text1}/>
      <VideoView vidLink="https://www.youtube.com/embed/VNmmXXDsZ6A"/>
      <HeaderView text={htext2}/>
      <ImageView imgsrc={headset}/>
      <TextView text={text2} />
      <ImageView imgsrc={puredata}/>
      <TextView text={text3} />
      <TextView text={""} />

    </div>
  )
}
