import { createComment } from '../../API/comments.api'
import {useForm} from 'react-hook-form'
import {useAuth} from '../../contexts/AuthContext'
import {useParams} from 'react-router-dom'

const CommentForm = ({comments ,setComments}) => {
  const {register, reset, handleSubmit} = useForm()
  const {user} = useAuth()
  const { postId } = useParams()

  const onSubmit = async (values)=> {
    const {id} = await createComment(postId, values.text)
    const newComment = {
      id,
      postId,
      text: values.text,
      user
    }
    setComments([newComment, ...comments])
    reset()
  }

  return ( 
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='form-input' placeholder='write a comment' type="text" {...register('text')}/>
        <button className='btn-black'>comment</button>
      </form>
    </>
  )
}

export default CommentForm
