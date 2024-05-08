import {deletePost} from '../../../API/posts.api'
const DeleteButton = ({postId ,posts=[], setPosts}) => {
  
  const handleDeleteOne= async ()=> {
    await deletePost(parseInt(postId))
    const newPosts = posts.filter(post =>  post.id !== postId )

    setPosts(newPosts)
  }

  return (
    <p onClick={handleDeleteOne} className="x-delete">x</p>
  )
}

export default DeleteButton
