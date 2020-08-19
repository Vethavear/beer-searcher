import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage'
import './default.scss';
import Explorer from './pages/Explorer/Explorer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Explorer></Explorer>
    </div>
  );
}

export default App;
