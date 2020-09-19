import React from 'react'

export const ProjectCover = (props) => {
  return (
    <div className="hvr-grow">
      <button id="projectbutton">
        <h3 id="header">{props.projtitle}</h3>
        <img id="imgbanner" alt="projimage" src={props.imgsrc} />
        <p id="covertext">{props.projtext}</p>
      </button>
    </div>
  )
}
