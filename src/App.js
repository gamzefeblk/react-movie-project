import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from "./pages/Main";
import {BrowserRouter as Router ,Routes,Route}  from "react-router-dom"
import Login from './pages/Login';
import Register from "./pages/Register";
import RegisterProvider from './pages/Register';



function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar /> 
        <Routes>
          <Route path='/' element={<Main /> }/>
          <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register /> }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
