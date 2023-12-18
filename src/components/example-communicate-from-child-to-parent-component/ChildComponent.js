import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetParent}>Call Parent Method from Child Component</button> <br/><br />
      <button onClick={() => props.greetParentWithParams("child")}>Call Parent Method from Child Component passing parameter</button>
      {/* Note: if required to pass parameter use the Arrow Function. */}
    </div>
  )
}

export default ChildComponent
