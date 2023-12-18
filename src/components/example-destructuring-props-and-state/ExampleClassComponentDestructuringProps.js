import React, { Component } from 'react'

export default class ExampleClassComponentDestructuringProps extends Component {
  render() {
    const {name, placeOfBirth, dateOfBirth, children} = this.props;
    return (
      <div>
        {children}
        Hi my name is {name} with native place is {placeOfBirth} and my birthday is {dateOfBirth}
      </div>
    )
  }
}
