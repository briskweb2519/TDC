import React from 'react';
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
      </Router>
    </div>
  );
}

export default App;
