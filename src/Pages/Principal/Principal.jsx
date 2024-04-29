import PostsList from '../../components/posts/PostsList'
import CreatePost from '../../components/posts/CreatePost'
import UsePosts from './hooks/UsePosts'

const Principal = () => {
  const { posts } = UsePosts()

  return (
    <div>
      <CreatePost/>
      <PostsList posts={posts}/>
    </div>
  )
}

export default Principal
