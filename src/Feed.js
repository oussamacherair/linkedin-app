import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import { CalendarToday, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import { db } from './Firebace'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import {AnimatePresence,motion} from 'framer-motion'
function Feed() {
  const user =useSelector(selectUser)
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy('timeStamp','desc')
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  },[])
  const setPost = e => {
    e.preventDefault()
    db.collection('posts')
    .add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user?.photoUrl,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className='feed'>
      <div className='form__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={setPost} type='submit'>Send</button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption Icon={Image} title='photo' color='#7085f9' />
          <InputOption Icon={Subscriptions} title='video' color='#E7A33e' />
          <InputOption Icon={EventNote} title='Event' color='#c0cbcd' />
          <InputOption Icon={CalendarToday} title='Write articel' color='#7fc15e' />
        </div>
      </div>

      <AnimatePresence>
      {posts.map(({id,data:{name,description,photoUrl,message}}) =>
      (
        <motion.div key={id} initial={{opacity:0}} 
        animate={{opacity:1}} exit={{opacity:0}}>
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
           />
        </motion.div>
        
      ))
      }
      </AnimatePresence>
    </div>
  )
}

export default Feed