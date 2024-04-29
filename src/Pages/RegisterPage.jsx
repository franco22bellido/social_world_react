import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  
  const {register, handleSubmit} = useForm()
  const { signUp } = useAuth() 
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (values)=> {
    const data = await signUp(values)
    if(data){
        return navigate('/login')
    }
  })

  return (
    <>
        <form onSubmit={onSubmit}>
            <input placeholder='username' type="text" {...register('username')}/>
            <input placeholder='email' type="text" {...register('email')}/>
            <input placeholder='password' type="password" {...register('password')}/>
            <input placeholder='firstname' type="text" {...register('firstname')}/>
            <input placeholder='lastname' type="text" {...register('lastname')}/>
            <button type='submit'>register</button>
        </form>
    </>
  )
}

export default RegisterPage
