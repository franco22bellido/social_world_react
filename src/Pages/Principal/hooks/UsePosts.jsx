import { useEffect, useState } from 'react'
import { createPost, getPostsByFollowing } from '../../../API/posts.api'

const UsePosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const getPosts = async ()=> {
      setLoading(true)
      const data = await getPostsByFollowing()
      setLoading(false)
      return setPosts(data)
    }
    const addPost = async (values)=> {
      setLoading(true)
      const data = await createPost(values)
      setLoading(false)
      return data
    }
    useEffect(()=> {
      getPosts()
    },[] )
  return {
    posts, setPosts, loading, setLoading, addPost
  }
}

export default UsePosts
