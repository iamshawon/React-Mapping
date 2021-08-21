import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Inline CSS
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
  padding: "15px",
}

ReactDOM.render(
  <div>
    <h1 style={headingStyle}>React App</h1><hr></hr>
    <App />
  </div>,
  document.getElementById('root')
);
