import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}></Avatar>
                <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOutlined} title='like' color='gray'/>
            <InputOption Icon={ChatOutlined} title='comment' color='gray'/>
            <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
            <InputOption Icon={SendOutlined} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Post