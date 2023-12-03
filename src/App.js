import logo from './logo.svg';
import './App.css';
import ExampleFunctionComponent from './components/example-functional-compoonent/ExampleFunctionalComponent';
import ExampleFunctionalComponentUsingArrowFunction from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunction';
import ExampleFunctionalComponentUsingArrowFunctionInSingleLine from './components/example-functional-compoonent/ExampleFunctionalComponentUsingArrowFunctionInSingleLine';
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
    </div>
  );
}

export default App;
