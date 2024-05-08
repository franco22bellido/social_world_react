import Post from "./Post"
import { Link } from "react-router-dom"
import ButtonLike from '../../components/Likes/ButtonLike'
import DeleteButton from "./Buttons/DeleteButton"

const PostsList = ({posts = [], setPosts}) => {

  const addLike = (i)=> {
    posts[i].likesCount = posts[i].likesCount + 1;
    setPosts([...posts])
  }
  const decrementLike = (i)=> {
    posts[i].likesCount = posts[i].likesCount - 1;
    setPosts([...posts])
  }

  return (
    <>
      {
        posts && posts.map((post, i)=> (
        <article className="card" key={i}>
          {
            !post?.username && 
            <DeleteButton postId={post.id} posts={posts} setPosts={setPosts}/>
          }
          <Post post={post} username={post?.username} key={i}/>
          <ButtonLike postId={post.id} incrementLikesCount={()=> addLike(i)} decrementLikesCount={()=> decrementLike(i)}/>
          <Link className="comment-link" to={`/post/${post.id}`}>{post.commentsCount} comments...</Link>
        </article>

      ))
      }
  </>
  )
}

export default PostsList
