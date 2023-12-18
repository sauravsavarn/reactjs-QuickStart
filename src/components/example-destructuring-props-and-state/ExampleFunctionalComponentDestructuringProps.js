import React from 'react'

// example of de-structuring props in functional component
function ExampleFunctionalComponentDestructuringProps({name, placeOfBirth, dateOfBirth, children}) {
  return (
    <div>
        {children}
      Hi my name is {name} with native place is {placeOfBirth} and my birthday is {dateOfBirth}
    </div>
  )
}

export default ExampleFunctionalComponentDestructuringProps
