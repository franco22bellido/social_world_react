import PostsList from '../../components/posts/PostsList'
import { getPostsByFollowing } from '../../API/posts.api'
import CreatePost from '../../components/posts/CreatePost'
import UsePosts from './hooks/UsePosts'
import Loader from '../../components/Loader'
import { useEffect, useState } from 'react'

const Principal = () => {
  const { posts, setPosts, loading } = UsePosts()
  const [canExecute, setCanExecute] = useState(true)
  const [hasMorePosts, setHasMorePosts] = useState(false)
  const [loadingMorePosts, setLoadingMorePosts] = useState(false)

  useEffect(()=> {
    if(!loading){
      setTimeout(() => {
        setHasMorePosts(true)
      }, 1000);
    }
  },[loading])

  useEffect(() => {
    const handleScroll = async () => {
      if ((window.innerHeight + Math.round(window.scrollY) + 300) >= document.body.scrollHeight) {
        if (canExecute && hasMorePosts) {
          setCanExecute(false)
          setTimeout(() => {
            setCanExecute(true)
          }, 3000);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canExecute, setCanExecute, hasMorePosts]);

  useEffect(()=> {
      const getMorePosts = async ()=> {
        if(!canExecute && hasMorePosts){
          setLoadingMorePosts(true)
          const lastPost = posts[posts.length - 1]
          const data = await getPostsByFollowing(lastPost.id)
          setLoadingMorePosts(false)

          if (data.length === 0) {
            setCanExecute(true)
            return setHasMorePosts(false)
          }
            setPosts([...posts, ...data])
          if (data.length < 7) {
            setCanExecute(true)
            return setHasMorePosts(false)
          }
        }
      }
      getMorePosts()
    }, [canExecute, hasMorePosts])

  return (
    <div className='container-flex'>
      <CreatePost posts={posts} setPosts={setPosts} />
      <Loader loading={loading} />
      <PostsList posts={posts} setPosts={setPosts} />
      <Loader loading={!canExecute||loadingMorePosts} />
    </div>
  )
}

export default Principal
