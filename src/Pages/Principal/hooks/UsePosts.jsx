import { useEffect, useState } from 'react'
import { getPostsByFollowing } from '../../../API/posts.api'

const UsePosts = () => {
    const [posts, setPosts] = useState()

    const getPosts = async ()=> {
      const data = await getPostsByFollowing()
      return setPosts(data)
    }
  
    useEffect(()=> {
      getPosts()
    },[] )
  return {
    posts, setPosts
  }
}

export default UsePosts
