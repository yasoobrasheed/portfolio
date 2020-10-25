import React from 'react'
import { ProjectCover } from './ProjectCover.js'
import { Container, Row, Col } from 'react-bootstrap'
import { NavBar } from '../NavBar'
import './Projects.css'

import talkietalkie from './assets/talkietalkie.png'
import blazevr from './assets/blazevr.png'
//import flowerbot from './assets/flowerbot.png'
import dripdrop from './assets/dripdrop.png'
import insite from './assets/insite.png'
import peerboost from './assets/peerboost.png'
import stepstore from './assets/stepstore.png'

export const Projects = () => {
  const text1 = "A hands-free mouse built with AppleScript & PureData, which moves with the sound of your voice."
  const text2 = "An iOS App for real-time, location-targeted advertisements, built with Swift & Python Geofencing."
  const text3 = "A hackathon-winnning IoT application that utilizes ML & Time Series to track water-usage."
  const text4 = "A method for generating sustainable energy using a piezoelectric sensor embedded in shoes."
  const text5 = "A University of Chicago startup that connects large companies with micro-influencers."
  const text6 = "A multiplayer VR game that uses an ultrasonic sensor to extinguish virtual fires."
  //const text7 = "A voice recognition system built with Google Voice and Node.js, for ordering flowers."

  return (
    <div>
      <NavBar navType="project" variant="light"/>
      <Container id="padded">
        <Row>
          <Col>
            <ProjectCover link={"/insite"} projtitle={"INSITE"} imgsrc={insite} projtext={text2} />
          </Col>
          <Col>
            <ProjectCover link={"/peerboost"} projtitle={"PEERBOOST"} imgsrc={peerboost} projtext={text5} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCover link={"/talkietalkie"} projtitle={"TALKIETALKIE"} imgsrc={talkietalkie}
              projtext={text1}/>
          </Col>
          <Col>
            <ProjectCover link={"/blazevr"} projtitle={"BLAZEVR"} imgsrc={blazevr} projtext={text6} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCover link={"/stepstore"} projtitle={"STEPSTORE"} imgsrc={stepstore} projtext={text4} />
          </Col>
          <Col>
            <ProjectCover link={"/dripdrop"} projtitle={"DRIPDROP"} imgsrc={dripdrop} projtext={text3} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

/*
<Row>
  <Col>
    <ProjectCover projtitle={"FLOWERBOT"} imgsrc={flowerbot} projtext={text7} />
  </Col>
  <Col>
  </Col>
</Row>
*/
