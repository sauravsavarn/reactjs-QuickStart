import React, { Component } from 'react'

export default class ExampleListRenderingUsingMapMethod2 extends Component {
    states = ["Bihar", "Assam", "Uttar Pradesh", "Himachal Pradesh", "Madhya Pradesh", "Delhi", "TN"];
    finalResult = this.states.map(state => <h2>{state}</h2>);
  render() {
    return (
      <div>
        {this.props.children}
        {this.finalResult}
      </div>
    )
  }
}
