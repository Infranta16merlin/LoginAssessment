import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  
  const {isAuthenticated,loginWithRedirect,isLoading,logout,user} = useAuth0();

  const isUser = isAuthenticated && user;

  return <>
    {isUser && user.picture && <img src={user.picture} alt={user.name}/>}
    {isUser && user.name && <h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>}
    {
      isUser ?
      <button onClick={()=>{logout({returnTo:window.location.origin})}}>Log out</button> 
      :
      <button onClick={loginWithRedirect}>Login</button>
    }
   
  
  </>
};

export default Navbar;