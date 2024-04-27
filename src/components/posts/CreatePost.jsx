import {useForm} from 'react-hook-form'
import { createPost } from '../../API/posts.api'

const CreatePost = () => {
  const {handleSubmit, register, reset} = useForm()
  
  const onSubmit = async (values)=> {
    await createPost(values)
    reset()
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input placeholder='what are you doing?' type="text" {...register("text", {required: true})}/>
            <button type='submit'>enviar</button>
        </form>
    </div>  
  )
}

export default CreatePost
