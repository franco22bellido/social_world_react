import {deletePost} from '../../../API/posts.api'
import { deleteImage } from '../../../API/photos.api'
const DeleteButton = ({imgUrl='', postId ,posts=[], setPosts}) => {
  
  const handleDeleteOne= async ()=> {
    try {
      if(imgUrl){
        let imgUrlSplit = imgUrl.split('/')
        const public_id = imgUrlSplit[7].split('.')[0]
        await deleteImage(public_id)
      }
      await deletePost(parseInt(postId))
      const newPosts = posts.filter(post =>  post.id !== postId )
      setPosts(newPosts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <p onClick={handleDeleteOne} className="x-delete">x</p>
  )
}

export default DeleteButton
