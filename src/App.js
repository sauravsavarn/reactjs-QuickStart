import logo from './logo.svg';
import './App.css';
import ExampleFunctionComponent from './components/example-functional-compoonent/ExampleFunctionalComponent';
import ExampleFunctionalComponentUsingArrowFunction from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunction';
import ExampleFunctionalComponentUsingArrowFunctionInSingleLine from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunctionInSingleLine';
import ExampleClassComponent from './components/example-class-component/ExampleClassComponent';
import ExampleComponentLifecycle from './components/example-component-lifecycle/ExampleComponentLifecycle';
import ExampleFunctionalComponentDestructuringProps from './components/example-destructuring-props-and-state/ExampleFunctionalComponentDestructuringProps';
import ExampleClassComponentDestructuringProps from './components/example-destructuring-props-and-state/ExampleClassComponentDestructuringProps';
import ExampleEventHandlingFunctionalComponent1 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingFunctionalComponent1';
import ExampleEventHandlingClassComponent1 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingClassComponent1';
import ExampleEventHandlingBindingClassComponent1 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingBindingClassComponent1';
import ExampleEventHandlingBindingClassComponent2 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingBindingClassComponent2';
import ExampleEventHandlingBindingClassComponent3 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingBindingClassComponent3';
import ExampleEventHandlingBindingClassComponent4 from './components/example-event-handling-classNfunctional-component/ExampleEventHandlingBindingClassComponent4';
// App component represents the view which when launch can be seen in the browser.
function App() {
  return (
    <div className="App">
      {/* example of functional component */}
      <ExampleFunctionComponent />

      {/* declaring a functional component using ES6 Arrow function */}
      <ExampleFunctionalComponentUsingArrowFunction />

      {/* declaring a functional component using ES6 Arrow function in a single line when there is a single statement to return */}
      <ExampleFunctionalComponentUsingArrowFunctionInSingleLine />

      {/* declaring basic class component */}
      <ExampleClassComponent /><hr />

      {/* example to showcase component lifecycle */}
      <ExampleComponentLifecycle >
        <h1>Component Lifecycle</h1>
      </ExampleComponentLifecycle><hr />

      {/* example to showcase de-structuring props in functional-component */}
      <ExampleFunctionalComponentDestructuringProps name="Saurav Savarn" placeOfBirth="Patna" dateOfBirth="22-02-1986">
        <h1>Example of de-structuring props in functional component</h1>
      </ExampleFunctionalComponentDestructuringProps><hr />

      {/* example to showcase de-structuring props in class-component */}
      <ExampleClassComponentDestructuringProps name="Saurav Savarn" placeOfBirth="Patna" dateOfBirth="22-02-1986">
        <h1>Example of de-structuring props in class component</h1>
      </ExampleClassComponentDestructuringProps><hr />

      {/* example of event-handling in functional-component */}
      <ExampleEventHandlingFunctionalComponent1>
        <h1>Example of event-handling in functional component</h1>
      </ExampleEventHandlingFunctionalComponent1>

      {/* example of event-handling in class-component */}
      <ExampleEventHandlingClassComponent1>
        <h1>Example of event-handling in class component</h1>
      </ExampleEventHandlingClassComponent1><hr />

      {/* example of event-handle binding in the render method using bind function. */}
      <ExampleEventHandlingBindingClassComponent1 >
        <h1>Example of event-handling binding using render method and bind function</h1>
      </ExampleEventHandlingBindingClassComponent1>

      {/* example of event-handle binding in the render method using arrow function. */}
      <ExampleEventHandlingBindingClassComponent2>
        <h1>Example of event-handling binding using render method and arrow function</h1>
      </ExampleEventHandlingBindingClassComponent2>

      {/* example of event-handle binding in the constructor. */}
      <ExampleEventHandlingBindingClassComponent3>
        <h1>Example of event-handling binding using the constructor</h1>
      </ExampleEventHandlingBindingClassComponent3>

      {/* example of event-handle binding as the arrow function as the class property */}
      <ExampleEventHandlingBindingClassComponent4>
        <h1>Example of event-handling binding using the arrow function as the class property</h1>
      </ExampleEventHandlingBindingClassComponent4>
    </div>
  );
}

export default App;
