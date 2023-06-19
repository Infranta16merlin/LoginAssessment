import React, { useState , useEffect} from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error, SingleRepos } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    console.log(document.documentElement.className );
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div>
       <nav>
        <div className="nav-center">
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <AuthWrapper>
      <BrowserRouter>
      <Routes>
      
        <Route path='/repos' element={
          <PrivateRoute>
          < Dashboard/>
          
          </PrivateRoute>
          }/>
          <Route path='repos/:id' element={<SingleRepos />} />
        
       
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      </BrowserRouter>
      </AuthWrapper>
    </div>
  );
}

export default App;
