import logo from './logo.svg';
import './App.css';
import ExampleFunctionComponent from './components/example-functional-compoonent/ExampleFunctionalComponent';
import ExampleFunctionalComponentUsingArrowFunction from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunction';
import ExampleFunctionalComponentUsingArrowFunctionInSingleLine from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunctionInSingleLine';
import ExampleClassComponent from './components/example-class-component/ExampleClassComponent';
import ExampleComponentLifecycle from './components/example-component-lifecycle/ExampleComponentLifecycle';
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
      <ExampleClassComponent /><hr/>

      {/* example to showcase component lifecycle */}
      <ExampleComponentLifecycle >
        <h1>Component Lifecycle</h1>
      </ExampleComponentLifecycle><hr/>
    </div>
  );
}

export default App;
