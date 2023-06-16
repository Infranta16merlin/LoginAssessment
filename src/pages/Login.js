import React from 'react';
import loginImg from '../images/login-img.svg';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
   
  const {loginWithRedirect} = useAuth0();

  return (
    
      <div className='container'>
        <img src={loginImg} alt='login' />
        <h1>GitHub Users</h1>
        <button className='btn'  onClick={loginWithRedirect}>LOGIN / SIGN UP</button>
      </div>
   
  )
};
export default Login;
