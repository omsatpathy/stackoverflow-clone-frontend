import React, { useState } from 'react'
import Input from '../AtomComponents/Input'
import Button from '../AtomComponents/Button'
import './auth.css'
import stackOverflowMiniLogo from '../../images/image.png'
import { Link, NavLink } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const onChangeUserId = (userId) => {
    setUserId(userId);
  };

  const loginUser = async (event) => {
    event.preventDefault();
    try {

        const loginResponse = await axios.post(
            "http://127.0.0.1:5000/v1/user/login",
            { uemail: email, uid: userId },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": true,
              },
            }
          );
          const token = loginResponse.data.data.token;
          const successMessage = loginResponse?.data?.data?.message;
          localStorage.setItem("token", token);
          setIsLoggedIn(true)
          setSuccessMessage(successMessage)

          if(token) {
            navigate("/questions/all")
          }

          

    } catch (error) {
        const errorMessage = error?.response?.data?.data?.message
        setIsLoggedIn(false);
        setErrorMessage(errorMessage);
    }
  };


  return (
    <>
    <div className="login-container">
      <NavLink to="/"><img src={stackOverflowMiniLogo} alt="logo"/></NavLink>
      <form className="form" onSubmit={loginUser}>
          <div className='input-with-label'> 
            <label>Email</label>
            <br />
            <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChangeEmail}
            />
          </div>

          <div className='input-with-label'>
            <label>User ID</label>
            <br />
            <Input
              type="userId"
              name="userId"
              id="userId"
              onChange={onChangeUserId}
            />
          </div>

          <Button type="submit" buttonText="Login" className="login-signup-button" />
          <hr />
        </form>
        <div className="form-bottom">
          <p>Don’t have an account? <NavLink to="/signup">Sign up</NavLink></p>
        </div>
      </div>

    </>
  )
}

export default Login
