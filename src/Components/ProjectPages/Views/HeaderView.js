import React from 'react'
import "./HeaderView.css"

export class HeaderView extends React.Component {
  constructor(props) {
    super(props)
    this.size = props.size
    this.text = props.text
  }
  render() {
    return (
      <div id="headerback">
        <div id="headercontainer">
          <h1> {this.text} </h1>
        </div>
      </div>
    )
  }
}
