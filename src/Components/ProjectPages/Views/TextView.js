import React from 'react'
import "./TextView.css"

export class TextView extends React.Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }
  render() {
    return (
      <div id="textback">
        <div id="textcontainer">
          <p> {this.text} </p>
        </div>
      </div>
    )
  }
}
