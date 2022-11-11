import React from 'react';  
import './App.css';
import Forgot_Password from './Component/Login_Page/Forgot_Password';
import Header from './Component/Header';
import Login from './Component/Login_Page/Login';
import Register from './Component/Login_Page/Register';


function App() {
  return (
  // <Routes>
  //   <Header/>
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/create_account" element={<Register />} />
  // </Routes>
    <div className='overflow-hidden'>
      <Header/>
      <Login/>
      <Register/>
      <Forgot_Password/>
    </div>
    
  );
}

export default App;
