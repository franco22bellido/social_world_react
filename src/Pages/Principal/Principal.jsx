import PostsList from '../../components/posts/PostsList'
import CreatePost from '../../components/posts/CreatePost'
import UsePosts from './hooks/UsePosts'
import LoaderCat from '../../components/LoaderCat'

const Principal = () => {
  const { posts, setPosts, loading} = UsePosts()

  return (
    <div className='container-flex'>
      <CreatePost posts={posts} setPosts={setPosts}/>
      <LoaderCat loading={loading}/>
      <PostsList posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default Principal
