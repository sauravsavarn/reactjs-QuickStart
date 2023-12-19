import React, { Component } from 'react'

export default class ExampleListRenderingUsingMap extends Component {
  states = ["Bihar", "Assam", "Uttar Pradesh", "Himachal Pradesh", "Madhya Pradesh", "Delhi", "TN"];

  render() {
    return (
      <div>
        {this.props.children}
        {this.states.map(state => <h2>{state}</h2>)}
      </div>
    )
  }
}
