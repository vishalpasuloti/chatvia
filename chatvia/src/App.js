import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
import { useEffect, useState } from 'react';
import { getUserdataFromCookies } from './services/storage.service';
import { UserContext } from './services/usercontext.service';

function App() {
  const[user,setUser]=useState(null);

  function getUserData(){
    let data=getUserdataFromCookies();
    setUser(data);
   
  }
  useEffect(()=>{
    getUserData();
    
  });
  return (
    <BrowserRouter>
    
    <UserContext.Provider value={user}>
      
          <AppRouter />
      
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
