import React from 'react'
import StickyBox from "react-sticky-box";
import "./SideBar.css"

export const SideBar = () => {
  return (
    <StickyBox>
      <div id="sidebar">
        <a id="deactivate" href="/projects">
          <h1 className="hvr-grow" id="option" style={{"font-size": "25px", "padding-bottom": "10px"}}>PROJECTS</h1>
        </a>
        <a id="deactivate" href="/insite">
          <h1 className="hvr-forward" id="option">INSITE</h1>
        </a>
        <a id="deactivate" href="/peerboost">
          <h1 className="hvr-forward" id="option">PEERBOOST</h1>
        </a>
        <a id="deactivate" href="/talkietalkie">
          <h1 className="hvr-forward" id="option">TALKIETALKIE</h1>
        </a>
        <a id="deactivate" href="/blazevr">
          <h1 className="hvr-forward" id="option">BLAZEVR</h1>
        </a>
        <a id="deactivate" href="/stepstore">
          <h1 className="hvr-forward" id="option">STEPSTORE</h1>
        </a>
        <a id="deactivate" href="/dripdrop">
          <h1 className="hvr-forward" id="option">DRIPDROP</h1>
        </a>
      </div>
    </StickyBox>
  )
}
