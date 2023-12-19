import React, { Component } from 'react'

export default class ExampleListRenderingUsingMapWithKeys extends Component {
    states = ["Bihar", "Assam", "Uttar Pradesh", "Himachal Pradesh", "Madhya Pradesh", "Delhi", "TN"];

    // NOTE: here index is the key to the list item 
    stateList = this.states.map( (state, index) => <li className='list-group-item list-group-item-success'>{state}</li>)

  render() {
    return (
      <div>
        {this.props.children}
        <ul className="list-group">{this.stateList}</ul>
      </div>
    )
  }
}
