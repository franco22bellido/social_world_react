import Post from "./Post"
import { Link } from "react-router-dom"
import ButtonLike from '../../components/Likes/ButtonLike'
import DeleteButton from "./Buttons/DeleteButton"

const PostsList = ({posts = [], setPosts}) => {

  const addLike = (postId)=> {
    const postsUpdated = posts.map((post)=> {
      if(post.id === postId) {
        post.likesCount = post.likesCount + 1;
        return post}
        return post;
      })
    setPosts([...postsUpdated])
  }
  const decrementLike = (postId)=> {
    const postsUpdated = posts.map((post)=> {
      if(post.id === postId) {
        post.likesCount = post.likesCount - 1;
        return post}
        return post;
      })
    setPosts([...postsUpdated])
  }

  return (
    <>
      {
        posts && posts.map((post)=> (
        <article className="card" key={post.id}>
          {
            !post?.username && 
            <DeleteButton postId={post.id} imgUrl={post.imgUrl} posts={posts} setPosts={setPosts}/>
          }
          <Post post={post} username={post?.username}/>
          <ButtonLike postId={post.id} incrementLikesCount={()=> addLike(post.id)} decrementLikesCount={()=> decrementLike(post.id)}/>
          <Link className="comment-link" to={`/post/${post.id}`}>{post.commentsCount} comments...</Link>
        </article>

      ))
      }
  </>
  )
}

export default PostsList
