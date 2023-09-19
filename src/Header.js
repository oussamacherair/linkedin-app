import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import './header.css'
import { SupervisorAccount,Home, BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import { useDispatch} from 'react-redux';
import { logOut} from './features/counter/userSlice';
import{useSelector} from 'react-redux'
import { selectUser} from './features/counter/userSlice'
import { auth } from './Firebace';

function Header() {
  const dispatch=useDispatch()
 const user=useSelector(selectUser)
  const logoutofApp=()=>
  {
    dispatch(logOut)
    auth.signOut()
  }
  return (
    <div className='header'>  
     
    <div className='header__left'>
        <img src='
https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' alt=''/>

        <div className='header__search'> 
        <SearchIcon/>
        <input type='text'/>
        </div>
    </div> 

    <div className='header__right'>
      <HeaderOption Icon={Home} title='Home'/>
      <HeaderOption Icon={SupervisorAccount} title='My Network'/>
      <HeaderOption Icon={BusinessCenter} title='Jobs'/>
      <HeaderOption Icon={Chat} title='Messaging'/>
      <HeaderOption Icon={Notifications} title='Notifications'/>
      <HeaderOption title={user?.displayName} avatar={true}
      onClick={logoutofApp}
      />

    </div>

    </div>
  )
}

export default Header