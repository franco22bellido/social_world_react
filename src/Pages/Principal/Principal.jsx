import { useEffect, useState } from 'react'
import {getPostsByFollowing} from '../../API/posts.api'
import PostsList from '../../components/posts/PostsList'
import CreatePost from '../../components/posts/CreatePost'

const Principal = () => {
  const [posts, setPosts] = useState()

  const getPosts = async ()=> {
    const data = await getPostsByFollowing()
    return setPosts(data)
  }

  useEffect(()=> {
    getPosts()
  },[] )
  return (
    <div>
      <CreatePost/>
      <PostsList posts={posts}/>
    </div>
  )
}

export default Principal
