import React, { Component } from 'react'

export default class ExampleEventHandlingBindingClassComponent3 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: "Hi Saurav"
        }

        // binding event-handler
        this.clickEventHandlerBinding = this.clickEventHandlerBinding.bind(this);
      }
  
      clickEventHandlerBinding() {
          alert("Event Handler binding using method 3 - which is inside the constructor.")
  
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
