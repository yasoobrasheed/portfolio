import React from 'react'
import { ProjectCover } from './ProjectCover.js'
import { Container, Row, Col } from 'react-bootstrap'
import './Projects.css'

import talkietalkie from './assets/talkietalkie.png'
import blazevr from './assets/blazevr.png'
import flowerbot from './assets/flowerbot.png'
import dripdrop from './assets/dripdrop.png'
import insite from './assets/insite.png'
import peerboost from './assets/peerboost.png'
import stepstore from './assets/stepstore.png'

export const Projects = () => {
  const text1 = "A hands-free mouse built with AppleScript & PureData, that moves with singing."

  const text2 = "An iOS App for real-time, location-targeted advertisements."

  const text3 = "A hackathon-winnning IoT application for tracking water-usage."

  const text4 = "A method for generating energy using a piezoelectric sensor embedded in shoes."

  const text5 = "A startup that connects large companies with micro-influencers."

  const text6 = "A multiplayer VR game that uses an ultrasound sensor to extinguish virtual fires."

  const text7 = "A voice recognition system built with Google Voice and Node.js, for ordering flowers."

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ProjectCover projtitle={"TalkieTalkie"} imgsrc={talkietalkie}
              projtext={text1}/>
          </Col>
          <Col>
            <ProjectCover projtitle={"Insite"} imgsrc={insite} projtext={text2} />
          </Col>
          <Col>
            <ProjectCover projtitle={"DripDrop"} imgsrc={dripdrop} projtext={text3} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCover projtitle={"StepStore"} imgsrc={stepstore} projtext={text4} />
          </Col>
          <Col>
            <ProjectCover projtitle={"PeerBoost"} imgsrc={peerboost} projtext={text5} />
          </Col>
          <Col>
            <ProjectCover projtitle={"BlazeVR"} imgsrc={blazevr} projtext={text6} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCover projtitle={"FlowerBot"} imgsrc={flowerbot} projtext={text7} />
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
