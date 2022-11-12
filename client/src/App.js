import React from 'react';
import './App.css';
import ForgotPassword from './Component/Login_Page/ForgotPassword';
import Header from './Component/Header';
import Login from './Component/Login_Page/Login';
import Register from './Component/Login_Page/Register';
import MainPage from './Component/MainPage.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    // <Routes>
    //   <Header/>
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/create_account" element={<Register />} />
    // </Routes>
    <div className='p-4 overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<MainPage className="" />}   />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/forgot' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
