import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css'
import { NavBar } from '../NavBar'


export const Home = () => {
  return (
    <div>
      <NavBar navType="home" variant="dark"/>
      <Jumbotron fluid id="homejumbo">
      </Jumbotron>
    </div>
  )
}
