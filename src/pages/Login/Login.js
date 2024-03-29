import React, { useState } from 'react';
import twitterImage from  "/create a website like twitter/frontend/src/assets/images/twitter.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const [errorMessage, setError] = useState('');
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if(user || googleUser) {
    navigate('/')
    console.log(user)
    console.log(googleUser)
  }

  if(error){
    console.log(error.message)
  }

  if(loading){
    console.log('loading....')
  }

  const handleSubmit = e => {
          e.preventDefault();
          console.log('email, password');
          signInWithEmailAndPassword(email, password);
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }
  
  
  return (
    <div className="login-container">
          <div className="image-container">
                 <img className='image' src={twitterImage} alt="twitterImage" />
          </div>
          <div className="form-container">
            <div className='form-box'>
              <TwitterIcon style={{ color: 'skyblue' }} />
              <h2 className='heading'>Happing now</h2>
              <h3 className='heading1'>What happening today</h3>
              <form onSubmit={handleSubmit}>
                  <input 
                      type="email"
                      className='email'
                      placeholder='Email address'
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                      type="password"
                      className='password'
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                   />
                  <div className='btn-login'>
                    <button type="submit" className='btn'>Login</button>
                  </div>
               </form>
              </div>
              <hr />
              <div className='google-button'>
                  <GoogleButton
                       className='g-btn'
                       type='light'
                       onClick={handleGoogleSignIn}
                       />
              </div>
              <div>
                  Don't have account?
                  <Link
                  to='/signup'
                  style={{
                      textDecoration:'none',
                      color:'var(--twitter-color)',
                      fontWeight:'600',
                      marginleft:'5px'
                 }}
                 >
                     Signup
                 </Link>
              </div>
          </div>
    </div>
  );
};

export default Login;