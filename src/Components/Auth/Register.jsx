import React, { useId, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Input from '../AtomComponents/Input';
import Button from '../AtomComponents/Button';
import stackOverflowMiniLogo from '../../images/image.png'
import axios from 'axios';

const Register = () => {

  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const onChangeUserId = (userId) => {
    setUserId(userId);
  };

  const onChangeName = (name) => {
    setName(name);
  }

  const signUp = async (event) => {
    console.log(name, email, userId)
    event.preventDefault();
    try {

        const signUpResponse = await axios.post(
          "http://127.0.0.1:5000/v1/user/register",
          { uemail: email, uid: userId, uname: name },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": true,
            },
          }
        );
        
        console.log(signUpResponse)
        const successMessage = signUpResponse?.data?.data?.message
        setSuccessMessage(successMessage);
        setIsRegistered(true);


    } catch (error) {
      const errorMessage = error?.response?.data?.data?.message
      setIsRegistered(false);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <>
    <div className="login-container">
      <NavLink to="/"><img src={stackOverflowMiniLogo} alt="logo"/></NavLink>
      <form onSubmit={signUp} className="form">
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
            <label>Name</label>
            <br />
            <Input
                  type="name"
                  name="name"
                  id="name"
                  onChange={onChangeName}
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

          <Button type="submit" buttonText="Sign up" className="login-signup-button" />
          <hr />
        </form>
        <div className="form-bottom">
          <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </div>
      </div>
    </>
  )
}

export default Register
