import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <>
        <Header />
        <Nav />
        
        {/* Module-> react-router-dom */}

        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/abt' element={<About />} />
        </Routes>

        <Footer/>
    </>
  );
}

export default App;
