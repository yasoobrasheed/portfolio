import React from 'react'
import "./ImageView.js"

export class ImageView extends React.Component {
  constructor(props) {
    super(props)
    this.imgsrc = props.imgsrc
  }
  render() {
    return (
      <div id="headerback">
        <div id="imagecontainer">
          <img src={this.imgsrc} />
        </div>
      </div>
    )
  }
}
