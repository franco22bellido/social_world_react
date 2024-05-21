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
  const {comments, setComments} = UseComments(postId)
  
  const getPost = async ()=> {
    const data = await getOne(parseInt(postId))
    setPost(data)
  }


  const incrementLikes = ()=> {
    setPost({...post, likesCount: post.likesCount + 1})
  }
  const decrementLikes = ()=> {
    setPost({...post, likesCount: post.likesCount + -1})
  }


  useEffect(()=> {
      getPost()
  }, [])
  return (
    <section>
    {
        post && (
        <div className="container-flex">
          <div className="card mt-10-vh">
            <Post username={post.user.username} post={post}/>
            <ButtonLike postId={post.id} incrementLikesCount={incrementLikes} decrementLikesCount={decrementLikes} setPost={setPost}/>
            <CommentForm setComments={setComments} comments={comments}/>
          </div>
        <CommentsList comments={comments}/>
        </div>
        )
    }
    </section>
  )
}

export default PostPage
