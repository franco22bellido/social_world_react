import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import UsePosts from '../../Pages/Principal/hooks/UsePosts'
import Loader from '../Loader'
import ErrorList from '../ErrorsList'
import { useState } from 'react'

const CreatePost = ({ posts, setPosts }) => {
  const { handleSubmit, register, reset } = useForm()
  const { addPost, errors } = UsePosts()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const onSubmit = async (values) => {
    reset()
    setLoading(true)
    const data = await addPost(values)
    setLoading(false)
    if(data){
      setPosts([{ ...data, username: user.username }, ...posts])
    }
  }
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <textarea
        onKeyUp={(e) => {
          e.target.style.height = 'inherit'
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        className='form-area' placeholder='what are you doing?' name="" id="" {...register("text", { required: true })}></textarea>
      <button className='btn-black' type='submit'>create post</button>
      <Loader loading={loading} />
      <ErrorList errors={errors}/> 
    </form>
  )
}

export default CreatePost

// const textarea = document.querySelector('textarea')
// textarea.addEventListener('keyup', e =>{
//     textarea.style.height = 'auto';
//     const scHeight = e.target.scrollHeight - 4
//     textarea.style.height = `${scHeight}px`
// })