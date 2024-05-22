// src/components/Profile.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authActions';
// import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const handleLogout = () =>{
        dispatch(logout())
        // window.location.reload()
    }

    // var duration = 30
    // const updateLog = () => {
    //   duration--;
    //   console.log(duration);
    //   if (duration < 1) {
    //     dispatch(logout())
    //     // window.location = "/"
    //   }
    // }

    
  
    // const resetTimer = () => {
    //   duration = 30
    // }
  
    // setInterval(updateLog, 1000)
    // window.addEventListener("mousemove", resetTimer)

    // const loginFailed = false


  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.user.username}!</p>
    <p>Email: {user.user.email}</p>
      <button onClick={handleLogout}>Logout</button>

      {/* {loginFailed && (
        <div>
          <br />
          <message type="error" message="Login failed. Please try again." />
        </div>
      )} */}

    </div>
  );
};

export default Profile;