import { useState } from "react"
import {createLike, deleteLike} from '../../API/likes.api'

const NewButtonLike = ({isLiked, postId, addLike, decrementLike}) => {
  const [like, setLike] = useState(isLiked)
  
  async function handleChangeLike() {
    if(isLiked){
        await deleteLike(postId)
        decrementLike()
        return setLike(!like)
    }
    await createLike(postId)
    addLike()
    return setLike(!like)
  }
  return (
    <button onClick={handleChangeLike} className="bg-[#0091ff] w-20 px-5 py-[2px] active:scale-95 hover:bg-blue-600 transition-all">{like ? 'dislike' : 'like'}</button>
  )
}

export default NewButtonLike
