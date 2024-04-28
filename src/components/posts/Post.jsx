const Post = ({post = {}, username=false}) => {
  

  return (
    <>
      <div>
        {
          username && (
        <p><strong>username: {username}</strong></p>)
        }
        <p>{post.text}</p>
        <strong>
        <p>likes: {post.likesCount }</p>
        <p>comments: {post.commentsCount}</p>
        </strong>
      </div>
    </>
  )
}

export default Post
