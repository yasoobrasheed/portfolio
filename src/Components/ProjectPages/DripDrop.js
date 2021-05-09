import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';
import { ImageView } from './Views/ImageView';
import watertracker from './assets/waterUsageTracker.jpeg'

export const DripDrop = () => {
  const text = "A winning social sustainability solution to water wastage, DripDrop is a FitBit for your faucets."
  const text2 = "In 2019, I participated in a technology hackathon at Accenture sponsored by AWS. There were 300 analysts competing in 75 teams. We were tasked to use AWS Lambda to solve a social sustainability issue and present our solution live to executives and other teams around the US."
  const text3 = "We proposed a solution to residential water wastage by creating an IOT device that could be used to measure water usage from faucets and showerheads. Using a cron task, we passed data that we pulled from a water usage emulation API in daily intervals into AWS Lambda. Our lambda filtered the data and ran a TimeSeries model on it to predict future water usage."
  const text4 = "Our end goal was to educate individuals on just how much water they and their friends and family waste in their hot morning showers. And we won the hackathon! You can see a blurry picture of the dashboard we presented below."
  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={text} />
      <TextView text={text2} />
      <TextView text={text3} />
      <TextView text={text4} />
      <ImageView imgsrc={watertracker} />
    </div>
  )
}
