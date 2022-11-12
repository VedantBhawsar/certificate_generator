import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux' ;

function App() {

  const state = useSelector((state) => state.user);
  console.log(state.user.user.userid)
  

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
            <Route exact path='/' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <Login />} />
            <Route exact path='/login' element={state.user?.user?.userid?.length>0?<MainPage />: <Login />} />
            <Route exact path='/register' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <Register />} />
            <Route exact path='/forgot' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <Login />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
