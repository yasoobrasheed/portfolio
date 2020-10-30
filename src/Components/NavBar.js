import React, { Component } from 'react'
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

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {navType: props.navType, variant: props.variant}
  }

  render() {
    const navType = this.state.navType
    const variant = this.state.variant

    return (
      <Navbar expand="lg" fixed="top" variant={variant}>

        <Navbar.Brand href="/">
          <div>
            <img href="/" id="facelogo" alt="face" src={logo} width="40" height="40"/>
            <img id="block" alt="blank" src={trans} width="10" height="40"/>
            Yasoob Rasheed
          </div>
        </Navbar.Brand>

        <>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link className="hvr-grow" id={(navType === 'home' || navType === 'about') ? 'navitem' : 'navitemblack'} href="/about"> About </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="hvr-grow" id={(navType === 'home' || navType === 'about') ? 'navitem' : 'navitemblack'} href="/projects"> Projects </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="hvr-grow" id={(navType === 'home' || navType === 'about') ? 'navitem' : 'navitemblack'} href="https://drive.google.com/file/d/1Wj1vl8sqwa-gBC82DKjt21KgGzvO1fAz/view"> Poetry </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="m-auto">
            {navType === 'home' &&
              <Nav.Item>
                <Nav.Link className="hvr-grow" id={navType === 'home' ? 'navitem' : 'navitemblack'}> SITE STILL IN PROGRESS </Nav.Link>
              </Nav.Item>
            }
          </Nav>
          
          <Nav className="ml-auto">
            <div id="media-links">
              <a href="https://github.com/yasoobrasheed" target="_blank" rel="noopener noreferrer">
                <img className={navType === 'home' ? 'logo' : 'logoblack'} alt="gh" src={github}/>
              </a>
              <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
              <a href="https://www.linkedin.com/in/yasoobrasheed/" target="_blank" rel="noopener noreferrer">
                <img className={navType === 'home' ? 'logo' : 'logoblack'}  alt="li" src={linkedin}/>
              </a>
              <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
              <a href="https://www.instagram.com/yasoobr/" target="_blank" rel="noopener noreferrer">
                <img className={navType === 'home' ? 'logo' : 'logoblack'}  alt="insta" src={instagram}/>
              </a>
              <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
              <a href="https://www.facebook.com/yasoob.rasheed" target="_blank" rel="noopener noreferrer">
                <img className={navType === 'home' ? 'logo' : 'logoblack'}  alt ="fb" src={facebook}/>
              </a>
              <img id="block" alt="blank" src={trans} width="7.5" height="40"/>
              <a href="https://soundcloud.com/yasooob" target="_blank" rel="noopener noreferrer">
                <img id="link" className={navType === 'home' ? 'logo' : 'logoblack'}  alt="dc" src={soundcloud}/>
              </a>
            </div>
          </Nav>

        </Navbar.Collapse>
        </>
        
      </Navbar>
    )
  }
}
