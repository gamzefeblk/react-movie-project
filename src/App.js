import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from "./pages/Main";
import {BrowserRouter as Router ,Routes,Route}  from "react-router-dom"
import Login from './pages/Login';
import Register from "./pages/Register";
import {AuthContexProvider} from "./context/AuthContext"



function App() {
  return (
    <React.Fragment>
      <Router>
      <AuthContexProvider>  {/*//navigate in calismasi icin Rout sisteminin icerisine koyamk gerekiyor */}
      <Navbar /> 
        <Routes>
          <Route path= '/react-movie-project' element={<Main /> }/>
          <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register /> }/>
        </Routes>
        </AuthContexProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
