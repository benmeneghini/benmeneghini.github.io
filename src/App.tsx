import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
