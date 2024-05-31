const Post = ({post = {}, username=false}) => {
  return (
      <>
        {
          username &&
          <p className="mt-0"><strong>username: {username}</strong></p>
        }
        <p className="p-break-word">{post.text}</p>
        <strong>
        <p>likes: {post.likesCount }</p>
        <p>comments: {post.commentsCount}</p>
        </strong>
        <p>createdAt: {new Date(post.createdAt).toLocaleString()}</p>
      </>
  )
}

export default Post
