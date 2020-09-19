import React from 'react'

export const ProjectCover = (props) => {
  return (
    <div>
      <button className="hvr-bounce-to-right" id="projectbutton">
      <h3 id="header">{props.projtitle}</h3>
      <img id="imgbanner" alt="projimage" src={props.imgsrc} />
      <p id="covertext">{props.projtext}</p>
      </button>
    </div>
  )
}
