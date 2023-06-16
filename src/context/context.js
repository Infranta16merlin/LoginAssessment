
import React, { useState, useEffect } from 'react';
import mockRepos from './mockData.js/mockRepos';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) =>{


  
    const [githubUser,setGithubUser] = useState(mockUser);
    const [repos,setRepos] = useState(mockRepos);
    const [request,setRequest] = useState(0);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState({show:false,msg:''});



    const fetchRequest = ()=>{
       axios(`${rootUrl}/rate_limit`).then(({data})=>{
        let {rate : {remaining}} = data
        console.log(data);
        setRequest(remaining)
        if(remaining === 0){
            toggleError(true,'Sorry, you have exceeded your hourly limit')
        }
       }).catch((e)=>console.log(e))

    }

    const searchGithubUser = async (user)=>{
        console.log(user);
        setLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch((error)=>console.log(error));
       if(response){

            //repos
            await axios(`${rootUrl}/users/${login}/repos?per_page=100`)
            .then((response)=>setRepos(response.data))

       
        } else {
            toggleError(true,'theres is no user with that username')
        }
     fetchRequest();
     setLoading(false);
    }

    function toggleError(show,msg){
        setError({show,msg})
    }

    useEffect(()=>{
        fetchRequest();
         console.log('hello');
    },[])






    return <GithubContext.Provider value={{repos,request,error,searchGithubUser,loading}}>{children}</GithubContext.Provider>
}

export {GithubContext,GithubProvider};
