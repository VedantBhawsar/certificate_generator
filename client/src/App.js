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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './app/userSlice';

function App() {

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async() => {
    const result = await axios.get(`http://localhost:3001/${localStorage.getItem('id')}`)
    console.log(result.data[0])
    dispatch(login({user: result.data[0]}));
    }

    getUser();

  }, [])

  

  return (
      <div className='p-4 overflow-hidden'>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <Login className='hidden overflow-hidden'/>} />
            <Route exact path='/login' element={state.user?.user?.userid?.length>0?<MainPage />: <Login className='hidden overflow-hidden' />} />
            <Route exact path='/register' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <Register />} />
            <Route exact path='/forgot' element={state.user?.user?.userid?.length>0?<MainPage className="" />: <ForgotPassword />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
