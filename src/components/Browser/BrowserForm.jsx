import { useForm } from 'react-hook-form'
import { getUsersByUsername } from '../../API/profile.api'
const BrowserForm = ({handlerResults}) => {

  const { register, handleSubmit } = useForm()

  const onSubmit = async (values) => {
    const data = await getUsersByUsername(values.username)
    handlerResults(data)
  }
  return (
    <>
      <form className='container-flex form' onSubmit={handleSubmit(onSubmit)}>
        <input className='form-input' placeholder='type a username' type="text" {...register('username', { required: true })} />
        <button className='btn-red' type='submit'>search</button>
      </form>
    </>
  )
}

export default BrowserForm
