import React from 'react'
import './SideBar.css'
import { Avatar } from '@material-ui/core'
import{useSelector} from 'react-redux'
import { selectUser} from './features/counter/userSlice'
function SideBar() {
    const user=useSelector(selectUser)
    const recentItem=(topic)=>(
         <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sideBar'>
        <div className='sidebar__top'>
            <img src='https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1223&q=80' alt=''/>
            <Avatar className='sidebar__avatar' src={user.photoURL}>{user.email[0].toUpperCase()}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sideBar__statNumber'>2,543</p>
            </div>

            <div className='sidebar__stat'>
                <p>Who on post</p>
                <p className='sideBar__statNumber'>2,443</p>
            </div>
        </div>

        <div className='sidebar__botton'>
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('Programming')}
            {recentItem('softwareEnginnering')}
            {recentItem('Design')}
            {recentItem('developer')}

        </div>
    </div>
  )
}

export default SideBar