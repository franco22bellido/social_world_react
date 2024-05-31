import {useForm} from 'react-hook-form'
import { createPost } from '../../API/posts.api'
import {useAuth} from '../../contexts/AuthContext'

const CreatePost = ({posts, setPosts}) => {
  const {handleSubmit, register, reset} = useForm()
  const { user } = useAuth()


  const onSubmit = async (values)=> {
    reset()
    const data = await createPost(values)
    setPosts([{...data, username: user.username}, ...posts])
  }
  return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}> 
            <textarea
            onKeyUp={(e)=> {
              e.target.style.height = 'inherit'
              e.target.style.height = `${e.target.scrollHeight}px`; 
            }}
            className='form-area' placeholder='what are you doing?' name="" id="" {...register("text", {required: true})}></textarea>
            <button className='btn-black' type='submit'>create post</button>
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