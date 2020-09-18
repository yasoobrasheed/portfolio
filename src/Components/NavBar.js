import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo3.png'
import trans from '../assets/transparent.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import soundcloud from '../assets/soundcloud.png'
import "./NavBar.css"

export const NavBar = () => (
    <Navbar expand="lg" fixed="top" variant="dark">

      <Navbar.Brand href="/">
        <a>
          <img href="/" id="facelogo" alt="face" src={logo} width="40" height="40"/>
          <img id="block" alt="blank" src={trans} width="10" height="40"/>
          Yasoob Rasheed
        </a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link id="navitem" href="/projects"> Projects </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="navitem" href="/tutoring"> Tutoring </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <div id="media-links">
            <a href="https://github.com/yasoobrasheed" target="_blank" rel="noopener noreferrer">
              <img className="logo" alt="gh" src={github}/>
            </a>
            <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
            <a href="https://www.linkedin.com/in/yasoobrasheed/" target="_blank" rel="noopener noreferrer">
              <img className="logo" alt="li" src={linkedin}/>
            </a>
            <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
            <a href="https://www.instagram.com/yasoobr/" target="_blank" rel="noopener noreferrer">
              <img className="logo" alt="insta" src={instagram}/>
            </a>
            <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
            <a href="https://www.facebook.com/yasoob.rasheed" target="_blank" rel="noopener noreferrer">
              <img className="logo" alt ="fb" src={facebook}/>
            </a>
            <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
            <a href="https://soundcloud.com/yasooob" target="_blank" rel="noopener noreferrer">
              <img id="link" className="logo" alt="dc" src={soundcloud}/>
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
