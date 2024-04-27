const Comment = ({comment={}}) => {

  return (
    <div>
      <p><strong>username: {comment.user.username}</strong></p>
      <p>{comment.text}</p>
    </div>
  )
}

export default Comment
