const Comment = ({comment={}}) => {

  return (
    <div className="card">
      <p><strong>username: {comment.user.username}</strong></p>
      <p>{comment.text}</p>
    </div>
  )
}

export default Comment
