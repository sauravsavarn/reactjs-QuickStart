*   List Rendering without keys will report the following issues into the Browser Console.

    _# Error reports into the browser console
    react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

    Check the render method of `ExampleListRenderingUsingMapMethod2`. See https://reactjs.org/link/warning-keys for more information.
        at h2
        at ExampleListRenderingUsingMapMethod2 (http://localhost:3000/static/js/bundle.js:2051:5)
        at div
        at App 

* In order to avoid the below issues, key is used while List view is getting rendered into ReactJS.    