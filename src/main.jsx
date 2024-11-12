// React's entry point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// createRoot is a function that creates a root container node in the DOM and returns
// a root object. The root object has a render method that takes a React element and
// renders it into the container node.
//
// The element passed to render is wrapped in a React.StrictMode component. This component
// tells React to run in strict mode which means that it will check for potential problems
// in the code and warn about them. Strict mode can be disabled by passing false as the
// first argument to the createRoot method.
//
// The App component is the root component of the application and it is the one that is
// rendered into the root container node.
