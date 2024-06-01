import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import ErrorsList from '../components/ErrorsList'
const RegisterPage = () => {
  
  const {register, handleSubmit} = useForm()
  const { signUp, errors} = useAuth() 
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (values)=> {
    const data = await signUp(values)
    if(data){
        return navigate('/login')
    }
  })

  return (
    <section className='container-flex'>
        <form className='container-flex form' onSubmit={onSubmit}>
        <h1>Register</h1>
            <input className='form-input' placeholder='username' type="text" {...register('username')}/>
            <input className='form-input' placeholder='email' type="text" {...register('email')}/>
            <input className='form-input' placeholder='password' type="password" {...register('password')}/>
            <input className='form-input' placeholder='firstname' type="text" {...register('firstname')}/>
            <input className='form-input' placeholder='lastname' type="text" {...register('lastname')}/>
            <button className='btn-red' type='submit'>sign Up</button>
            <ErrorsList errors={errors}/>
        </form>
  </section>
  )
}

export default RegisterPage
