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
    <form className='w-full md:w-3/5 flex flex-col justify-center mt-3' onSubmit={handleSubmit(onSubmit)}>
      <textarea
        onKeyUp={(e) => {
          e.target.style.height = 'inherit'
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        className='form-area p-2' placeholder='write a new post' name="" id="" {...register("text", { required: true })}></textarea>
      <button className='btn-black mx-auto mt-1 mb-5 w-full md:w-1/4 md:mx-0' type='submit'>create post</button>
      <Loader loading={loading} />
      <ErrorList errors={errors}/> 
    </form>
  )
}

export default CreatePost