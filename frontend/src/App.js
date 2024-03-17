import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ChoseWork from './components/ChoseWork';
import Login from './components/Login';


function App() {
  return (
    <div>
      <Navbar/>
    <BrowserRouter>
        <Routes>
              
              <Route path='/'  element={<Home/>}/>
              <Route path='/About'  element={<About/>}/>
              <Route path='/Chosework'  element={<ChoseWork/>}/>
              <Route path='/Login'  element={<Login/>}/>

        </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
