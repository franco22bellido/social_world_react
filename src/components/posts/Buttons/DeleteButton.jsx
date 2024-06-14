import {deletePost} from '../../../API/posts.api'
import { deleteImage } from '../../../API/photos.api'
const DeleteButton = ({imgUrl='', postId ,posts=[], setPosts}) => {
  
  const handleDeleteOne= async ()=> {
    let imgUrlSplit = imgUrl.split('/')
    const public_id = imgUrlSplit[7].split('.')[0]
    await deletePost(parseInt(postId))
    await deleteImage(public_id)
    const newPosts = posts.filter(post =>  post.id !== postId )

    setPosts(newPosts)
  }

  return (
    <p onClick={handleDeleteOne} className="x-delete">x</p>
  )
}

export default DeleteButton
