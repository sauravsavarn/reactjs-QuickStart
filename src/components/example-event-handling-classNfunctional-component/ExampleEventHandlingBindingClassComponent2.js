import React, { Component } from 'react'

// this is an example of event-handle binding using arrow function in the render method.
// NOTE: when using arrow function we should note that this is call to the function 'clickEventHandlerBinding' with parenthesis but not without it.
export default class ExampleEventHandlingBindingClassComponent2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: "Hi Saurav"
        }
      }
  
      clickEventHandlerBinding() {
          alert("Event Handler binding using method 2 - which is inside the render method using arrow function.")
  
          this.setState({
              message: "Goodbye Saurav!"
          })
      }

      
  render() {
    return (
        <div>
          {this.props.children}
          <button onClick={() => this.clickEventHandlerBinding()}>Click Me! - {this.state.message}</button>
        </div>
      )
  }
}
