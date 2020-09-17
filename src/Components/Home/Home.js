import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Home.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import soundcloud from '../../assets/soundcloud.png'


export const Home = () => {
  return (
    <div>
      <Jumbotron fluid id="jumbo">
      </Jumbotron>

      <div className="media-links">
        <a href="https://github.com/yasoobrasheed" target="_blank">
        <button id="socialbutton">
          <img className="logo" src={github}/>
        </button>
        </a>

        <a href="https://www.linkedin.com/in/yasoobrasheed/" target="_blank">
        <button id="socialbutton">
          <img className="logo" src={linkedin}/>
        </button>
        </a>

        <a href="https://www.instagram.com/yasoobr/" target="_blank">
        <button id="socialbutton">
          <img className="logo" src={instagram}/>
        </button>
        </a>

        <a href="https://www.facebook.com/yasoob.rasheed" target="_blank">
        <button id="socialbutton">
          <img className="logo" src={facebook}/>
        </button>
        </a>

        <a href="https://soundcloud.com/yasooob" target="_blank">
        <button id="socialbutton">
          <img className="logo" src={soundcloud}/>
        </button>
        </a>
      </div>
      <p id="cheekytext">Ah yes.. I see I've got your attention. Try checking out some of my work on the top left.</p>

    </div>
  )
}
