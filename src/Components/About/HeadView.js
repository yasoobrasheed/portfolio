import React from 'react'
import "./HeadView.css"

export class HeadView extends React.Component {
  constructor(props) {
    super(props)
    this.size = props.size
    this.text = props.text
  }
  render() {
    return (
      <div id="headercont">
        <h3> {this.text} </h3>
      </div>
    )
  }
}
