import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
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
        <a href="https://github.com/yasoobrasheed" target="_blank" rel="noopener noreferrer">
        <button id="socialbutton">
          <img className="logo" alt="gh" src={github}/>
        </button>
        </a>

        <a href="https://www.linkedin.com/in/yasoobrasheed/" target="_blank" rel="noopener noreferrer">
        <button id="socialbutton">
          <img className="logo" alt="li" src={linkedin}/>
        </button>
        </a>

        <a href="https://www.instagram.com/yasoobr/" target="_blank" rel="noopener noreferrer">
        <button id="socialbutton">
          <img className="logo" alt="insta" src={instagram}/>
        </button>
        </a>

        <a href="https://www.facebook.com/yasoob.rasheed" target="_blank" rel="noopener noreferrer">
        <button id="socialbutton">
          <img className="logo" alt ="fb" src={facebook}/>
        </button>
        </a>

        <a href="https://soundcloud.com/yasooob" target="_blank" rel="noopener noreferrer">
        <button id="socialbutton">
          <img className="logo" alt="dc" src={soundcloud}/>
        </button>
        </a>
      </div>
      <p id="cheekytext">Ah yes.. I see I've got your attention. Try checking out some of my work on the top left.</p>

    </div>
  )
}
