import React from 'react'
import "./ImageView.js"
import "./ViewBack.css"

export class ImageView extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="videoback">
        <div id="imagecontainer">
        </div>
      </div>
    )
  }
}
