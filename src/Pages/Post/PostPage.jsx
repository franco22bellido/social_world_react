import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getOne} from '../../API/posts.api'
import Post from "../../components/posts/Post"
import CommentsList from "../../components/comments/CommentsList"
import CommentForm from "../../components/comments/CommentForm"
import ButtonLike from "../../components/Likes/ButtonLike"
import UseComments from "./hooks/UseComments"

const PostPage = () => {
  const {postId} = useParams()
  const [post, setPost] = useState()
  const {comments} = UseComments(postId)
  
  const getPost = async ()=> {
    const data = await getOne(parseInt(postId))
    setPost(data)
  }

  useEffect(()=> {
      getPost()
  }, [])
  return (
    <>
    {
        post && (
        <>
        <Post username={post.user.username} post={post}/>
        <ButtonLike post={post} setPost={setPost}/>
        <CommentForm/>
        <CommentsList comments={comments}/>
        </>
        )
    }
    </>
  )
}

export default PostPage
