import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage'
import './default.scss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
