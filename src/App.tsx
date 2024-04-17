import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
