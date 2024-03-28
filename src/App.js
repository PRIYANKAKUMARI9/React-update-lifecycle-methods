import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Updatee from './componenet/Updatee';
import ShouldUpdate from './componenet/ShouldUpdate';

function App() {
  return (
    <div className="App">
      <h1>heelo</h1>
      <Updatee/>
      <br/>
      <br/>
      <ShouldUpdate/>
    </div>
  );
}

export default App;
