import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getOne} from '../../API/posts.api'
import Post from "../../components/posts/Post"
import CommentsList from "../../components/comments/CommentsList"
import { getCommentsByPost } from "../../API/comments.api"
import CreatePost from "../../components/posts/CreatePost"
import CommentForm from "../../components/comments/CommentForm"

const PostPage = () => {
  const {postId} = useParams()
  const [post, setPost] = useState()
  const [comments, setComments] =useState()
  const getPost = async ()=> {
    const data = await getOne(parseInt(postId))
    setPost(data)
  }
  const getComments = async ()=> {
    const data = await getCommentsByPost(postId)
    setComments(data)
  }
  useEffect(()=> {
      getPost()
      getComments()
  }, [])
  return (
    <>
    {
        post && (
        <>
        <Post username={post.user.username} post={post}/>
        <CommentForm/>
        <CommentsList comments={comments}/>
        </>
        )
    }
    </>
  )
}

export default PostPage
