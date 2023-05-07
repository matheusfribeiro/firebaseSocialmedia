import {getDocs, collection} from 'firebase/firestore'
import { db } from '../config/firebase'
import { useState } from 'react'

interface Post {
  id: string,
  userId: string,
  title: string,
  username: string,
  description: string,
}

export const Home = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null)
  const postsRef = collection(db, "posts")

  const getPosts = async () => {
    const data = await getDocs(postsRef)
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[])
  }
  
  getPosts()
  return (
    <div>
      <h1>HOMEPAGE</h1>
    </div>
  )
}