import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.png'
import "./NavBar.css"

export const NavBar = () => (
    <Navbar expand="lg">

      <Navbar.Brand href="/">
        <a>
          <img href="/" id="facelogo" alt="face" src={logo} width="40" height="40"/>
          Yasoob Rasheed
        </a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/projects"> Projects </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tutoring"> Tutoring </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/realestate"> Real Estate </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
