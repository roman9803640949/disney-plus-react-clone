import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path="detail" element={<Detail/>}/>
          
          <Route path="/" element={<Home/>}/>
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
