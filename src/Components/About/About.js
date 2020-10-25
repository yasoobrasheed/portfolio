import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './About.css'
import { NavBar } from '../NavBar'


export const About = () => {
  return (
    <div>
      <NavBar navType="about" variant="dark"/>
      <Jumbotron fluid id="aboutjumbo">
      </Jumbotron>
    </div>
  )
}
