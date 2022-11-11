import React from 'react';
import './App.css';
import Forgot_Password from './Component/Login_Page/Forgot_Password';
import Header from './Component/Header';
import Login from './Component/Login_Page/Login';
import Register from './Component/Login_Page/Register';
import MainPage from './Component/MainPage.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/forgot' element={<Forgot_Password />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
