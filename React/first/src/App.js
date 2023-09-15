import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Bootstrapp from './Component/Bootstrapp';
import Propss from './Component/Propss';
import Statee from './Component/Statee';
import Chang from './Component/Chang';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <>
        <Header />
        <Nav />
        {/* <Bootstrapp/> */}
        
        {/* Module-> react-router-dom */}

        {/* <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/abt' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes> */}

        {/* <Footer/> */}

        {/* 
            props -> properties 
        */}

        {/* <Propss userName='CodeKul' Location="Pune" /> */}
        {/* <Statee /> */}

        <Chang/>
    </>
  );
}

export default App;

