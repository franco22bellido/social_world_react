import { useEffect, useState } from "react"
import { getCommentsByPost } from "../../../API/comments.api"

const UseComments = (postId) => {
  const [comments, setComments] = useState()

    const getComments = async ()=> {
        const data = await getCommentsByPost(postId)
        setComments(data)
    }

    useEffect(()=> {
        getComments()
    },[postId])
  return {
    comments, setComments
  }
}

export default UseComments
