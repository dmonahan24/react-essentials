import React from 'react';
import './App.css';

function SecretComponent() {
  return <h1>Super secret information for authorized users only</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>
}

function App() {
  return (
    <div className="App">
      Components here eventually
    </div>
  );
}

export default App;
