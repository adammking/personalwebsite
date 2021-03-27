import React from 'react'
import Routes from './Routes'
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
  );
}

export default App;
