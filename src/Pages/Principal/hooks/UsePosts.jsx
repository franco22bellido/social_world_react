import { useEffect, useState } from 'react'
import { createPost, getPostsByFollowing } from '../../../API/posts.api'

const UsePosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState([])

    const getPosts = async ()=> {
      setLoading(true)
      const data = await getPostsByFollowing()
      setPosts(data)
      return setLoading(false)
    }
    const addPost = async (values)=> {
      try {
        const data = await createPost(values)
        return data
      } catch (error) {
        const errors = error.response.data.message
        if(!Array.isArray(error)){
          return setErrors([errors])
        }else return setErrors(errors)
      }
    }
    useEffect(()=> {
      getPosts()
    },[] )
    useEffect(()=> {
      if(errors.length > 0){
        setTimeout(() => {
          setErrors([])
        }, 3100);
      }
    }, [errors])
  return {
    posts, setPosts, loading, setLoading, addPost, errors, getPosts
  }
}

export default UsePosts
