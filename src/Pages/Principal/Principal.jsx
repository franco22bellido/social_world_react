import PostsList from '../../components/posts/PostsList'
import CreatePost from '../../components/posts/CreatePost'
import UsePosts from './hooks/UsePosts'

const Principal = () => {
  const { posts, setPosts} = UsePosts()

  return (
    <div className='container-flex'>
      <CreatePost posts={posts} setPosts={setPosts}/>
      <PostsList posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default Principal
