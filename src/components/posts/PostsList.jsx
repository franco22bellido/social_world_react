import Post from "./Post"
import { Link } from "react-router-dom"
import DeleteButton from "./Buttons/DeleteButton"
import NewButtonLike from "../Likes/NewButtonLike"

const PostsList = ({posts = [], setPosts}) => {

  const addLike = (postId)=> {
    const postsUpdated = posts.map((post)=> {
      if(post.id === postId) {
        post.isLiked = !post.isLiked
        post.likesCount = post.likesCount + 1;
        return post}
        return post;
      })
    setPosts([...postsUpdated])
  }
  const decrementLike = (postId)=> {
    const postsUpdated = posts.map((post)=> {
      if(post.id === postId) {
        post.isLiked = !post.isLiked
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
          <NewButtonLike isLiked={post.isLiked} postId={post.id} addLike={()=>addLike(post.id)} decrementLike={()=>decrementLike(post.id)}/>
          <Link className="comment-link" to={`/post/${post.id}`}>{post.commentsCount} comments...</Link>
        </article>

      ))
      }
  </>
  )
}

export default PostsList
