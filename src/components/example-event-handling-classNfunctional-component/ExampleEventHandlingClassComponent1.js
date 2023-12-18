import React, { Component } from 'react'

export default class ExampleEventHandlingClassComponent1 extends Component {
    clickEventHandling() {
        alert("You have clicked. Event-Handling in Class Component");
    }

  render() {
    return (
      <div>
        {this.props.children}
      <button onClick={this.clickEventHandling}>Click Me</button>
      </div>
    )
  }
}
