import React, { useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed'
import './App.css';
import { logIn,logOut,selectUser } from './features/counter/userSlice';
import { auth } from './Firebace';
import { useDispatch, useSelector } from 'react-redux';
import Widgets  from './Widget';
import Login from './Login.js'
function App() {
  const user= useSelector(selectUser)
  const dispatch =useDispatch()
  useEffect(()=>{
      auth.onAuthStateChanged(userAuth=>
        {
          if(userAuth)
          {
            dispatch(logIn(
              {
                email:userAuth.email,
                uid:userAuth.uid,
                displayName:userAuth.displayName,
                photoUrl:userAuth.photoURL

              }
            ))
          }else
          {
            dispatch(logOut())
          }
        })
  },[])
  return (
    <div className="app">
     <Header/>
     {!user ? <Login />: 
     
      <div className='app__body'>
      <SideBar/>
      <Feed/>
      <Widgets/>
     </div>
     }
    
    </div>
  );
}

export default App;
