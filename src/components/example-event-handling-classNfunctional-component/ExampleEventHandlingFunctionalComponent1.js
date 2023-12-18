import React from 'react'

function ExampleEventHandlingFunctionalComponent1(props) {

    function clickEventHandling() {
        alert("You have clicked. Event-Handling in Functional Component");
    }

  return (
    <div>
        {props.children}
      <button onClick={clickEventHandling}>Click Me</button>
    </div>
  )
}

export default ExampleEventHandlingFunctionalComponent1
