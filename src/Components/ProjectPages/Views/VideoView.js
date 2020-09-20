import React from 'react'
import "./VideoView.css"

export class VideoView extends React.Component {
  constructor(props) {
    super(props)
    this.vidLink = props.vidLink
  }
  render() {
    return (
      <div id="videoback">
        <div id="videocontainer">
          <iframe width="100%vh" height="100%vh" src={this.vidLink} title="video" frameborder="0" allow="autoplay" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}
