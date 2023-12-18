import React, { Component } from 'react'

// this is the final approach of EventBinding which is to use arrow function as the class property, which is
// basically you change the way of defining methods in the class.  
export default class ExampleEventHandlingBindingClassComponent4 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: "Hi Saurav"
        }
      }
  
    clickEventHandlerBinding = () => {
        alert("Event Handler binding using method 4 - which is to use arrow function as the class property")
  
          this.setState({
              message: "Goodbye Saurav!"
          })
      }

      
  render() {
    return (
        <div>
          {this.props.children}
          <button onClick={this.clickEventHandlerBinding}>Click Me! - {this.state.message}</button>
        </div>
      )
  }
}