import React, { Component } from 'react'

// this is an example of event-handle binding in the render method.
export default class ExampleEventHandlingBindingClassComponent1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hi Saurav"
      }
    }

    clickEventHandlerBinding() {
        alert("Event Handler binding using method 1 - which is inside the render method using bind.")

        this.setState({
            message: "Goodbye Saurav!"
        })
    }

  render() {
    return (
      <div>
        {this.props.children}
        <button onClick={this.clickEventHandlerBinding.bind(this)}>Click Me! - {this.state.message}</button>
      </div>
    )
  }
}
