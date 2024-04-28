import Post from "./Post"
import { Link } from "react-router-dom"

const PostsList = ({posts = []}) => {
  return (
    <>
      {
        posts && posts.map((post, i)=> (
        <div key={i}>
          <Post post={post} username={post?.username} key={i}/>
          <Link to={`/post/${post.id}`}>create comment</Link>
        </div>

      ))
      }
    </>
  )
}

export default PostsList
