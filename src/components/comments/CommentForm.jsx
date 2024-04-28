import { createComment } from '../../API/comments.api'
import {useForm} from 'react-hook-form'

import {useParams} from 'react-router-dom'

const CommentForm = () => {
  const {register, reset, handleSubmit} = useForm()
  const { postId } = useParams()

  const onSubmit = async (values)=> {
    await createComment(postId, values.text)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='text' type="text" {...register('text')}/>
        <button>comment</button>
      </form>
    </>
  )
}

export default CommentForm
