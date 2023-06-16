import React, { useContext } from 'react';
import Navbar from '../components/NavBar';
import { GithubContext } from '../context/context';

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
      </main>
    )


 
};

export default Dashboard;
