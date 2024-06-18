import { Link } from "react-router-dom"

const Post = ({ post = {}, username = false }) => {
  return (
    <>
      {
        username &&
        <Link to={`/${username}`}>{username}</Link>
      }
      <p className="p-break-word">{post.text}</p>
      {
        post.imgUrl &&
        <div className="flex flex-row justify-center">
          <img className="rounded w-full" src={post.imgUrl} />
        </div>
        }
      <strong>
        <p>likes: {post.likesCount}</p>
      </strong>
      <p>createdAt: {new Date(post.createdAt).toLocaleString()}</p>
    </>
  )
}

export default Post
