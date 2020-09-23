import React from 'react'
import { NavBar } from '../NavBar'
import { SideBar } from '../SideBar'
//import { VideoView } from './Views/VideoView';
import { TextView } from './Views/TextView';
import { HeaderView } from './Views/HeaderView';
import { ImageView } from './Views/ImageView';

import insite from './assets/insite.png'
import fences from './assets/geojson.png'
import locs from './assets/actualplaces.png'
import testflight from './assets/testflight.png'

export const Insite = () => {
  const htext1 = "What if we could *carefully* use your location to give you discounts on products in your area? (Emphasis on carefully)"
  const text1 = "We start by asking our users to download our iOS app. We then recommend that they share their location with us, so that the app can track their movements throughout UChicago's campus. As our users interact with a number of geofences we've placed around campus (at libraries and coffee shops), our app communicates with a backend server which stores the amount of time they spend at a given location in Google Cloud Firestore. At the end of the day, we take their data and provide each location with a number score indicating the amount of time and frequency that they visited a given location. For privacy concerns, we delete all of their data at the end of the day. With the data that we gather, we set up push notifications that ping users about discounts on coffee or food inside their geofence. We make sure to set these notifications up as optional, so as to not annoy them."
  const text2 = "The geofences above are drawn using a point (consisting of a latitude and logitude coordinate) and a radius. These points are filtered through Python's GeoJSON and Shapely packages. Please note that although the geofence looks like a cirlce, it is actually a 100-sided shape (a hectagon or 100-gon). The images you see below are the real locations on UChicago's campus: Campus North Residential Commons, Harper Memorial Library, and Ryerson Laboratory."
  const htext2 = "Using TestFlight, we soft launch Insite on our friends' phones to test our geofences"
  const text3 = "Our iOS application is just a simple usage of Apple's Map API and Core Location API. Core Location has a geofence feature, so we feed the geofences we generated using Python into the iOS app. On the bottom right, you can see some of the sample push notifications we sent to our test users when they walked in and out of geofences on campus. The extra detailed number in the text field is the accuracy of a person's location. GPS is only accurate within a 5-10m margin. So this is evident in most of these fields."
  const text4 = "Finally, we initiate sample push notifications with the number of Insite users in the area as an example. All of our location data is stored in Google Cloud Firestore. On the application UI, a user can see the points of interest they spend the most time at. When the day is over, we delete all the data from Firestore and score the locations they have visited by frequency and duration."
  const text5 = "We also included a short privacy survey to go along with this project. To summarize that very quickly, we found that 61% of people believed that this whole application was a privacy problem (which is a lot). We then gave them a new survey question saying that we don't allow 3rd parties to get access to any data directly, we disable tracking services whenever the user chose to, and we delete all location data. After this, only 10% of survey participants believed this app is a privacy concern for them."

  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <SideBar />
      <HeaderView text={htext1} />
      <TextView text={text1} />
      <ImageView imgsrc={fences} />
      <TextView text={text2} />
      <ImageView imgsrc={locs} />
      <HeaderView text={htext2}/>
      <TextView text={text3} />
      <ImageView imgsrc={testflight} />
      <TextView text={text4} />
      <ImageView imgsrc={insite} />
      <TextView text={text5} />

    </div>
  )
}
