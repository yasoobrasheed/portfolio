import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { VideoView } from './Views/VideoView';
import { ImageView } from './Views/ImageView';
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';
import vrsetup from './assets/vrsetup.png'

export const BlazeVR = () => {
  const htext1 = "Here, I use a peltier element and an ultrasonic sensor to create a simple Co-op VR game."
  const text1 = "Player 1, you are in virtual reality. With the plastic rod in hand, you must extinguish fires. But be careful! Player 2 is trying to make you fail by placing a sheet of paper in front of your sensor. Try to throw them off by moving in random directions. Winner to 10."
  const text2 = "Player 2, you are in real life. With the sheet of paper in hand, you must block the first player's sensor. Try not to be thrown off by Player 1. Move fast! Winner to 10."
  const htext2 = "Here's a side view of our whole setup."

  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={htext1}/>
      <TextView text={"A little convoluted to explain, but pretty fun in real life I tell you."}></TextView>
      <TextView text={text1}/>
      <TextView text={text2}/>
      <VideoView vidLink="https://www.youtube.com/embed/_O1eylldazc"/>
      <HeaderView text={htext2} />
      <ImageView imgsrc={vrsetup} />
      <TextView text={"We made sure the ultrasonic sensor works by attaching it to a peltier element. The peltier element is cold when there are no objects in front of the sensor. When we approach the wall, the peltier heats up and we should stop moving. Our headset is an HTC Vive, and the plastic rod is just your simple run-of-the-mill plastic rod."}/>
      <TextView text={""} />
    </div>
  )
}
