import React from 'react'
import "./ImageView.css"

export class ImageView extends React.Component {
  constructor(props) {
    super(props)
    this.imgsrc = props.imgsrc
  }
  render() {
    return (
      <div id="imageback">
        <div id="imagecontainer">
          <img id="someimg" src={this.imgsrc} alt="pic"/>
        </div>
      </div>
    )
  }
}
