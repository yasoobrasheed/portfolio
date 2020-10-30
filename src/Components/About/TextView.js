import React from 'react'
import "./TextView.css"

export class TextView extends React.Component {
  constructor(props) {
    super(props)
    this.text = props.text
  }
  render() {
    return (
      <div id="textcont">
        <p> {this.text} </p>
      </div>
    )
  }
}
