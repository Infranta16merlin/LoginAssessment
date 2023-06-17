import React, { useContext } from 'react';
import Navbar from '../components/NavBar';
import { GithubContext } from '../context/context';
import Repos from './Repos';
import User from './User';

const Dashboard = () => {

  const {loading} = useContext(GithubContext);
  if(loading){
    return (
      <main>
     <Navbar/>
      
      </main>
    );
  }
    return (
      <main>
        <Navbar/>
        <Repos/>
        <User/>
      </main>
    )


 
};

export default Dashboard;
