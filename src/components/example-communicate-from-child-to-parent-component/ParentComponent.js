import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Parent Component"
      }

      //binding event handler in constructor
      this.greetParent = this.greetParent.bind(this);

      this.greetParentWithParams = this.greetParentWithParams.bind(this); //NOTE: event binding is important
    }

    greetParent() {
        alert(`Hello ${this.state.message}`)
    }

    greetParentWithParams(param) {
        alert(`Hello ${this.state.message} from ${param}`)
    }
    
  render() {
    return (
      <div>
        {this.props.children}
        <ChildComponent greetParent={this.greetParent} greetParentWithParams={this.greetParentWithParams} />
        {/* NOTE: here the function is passed as the props to the child-component */}
      </div>
    )
  }
}
