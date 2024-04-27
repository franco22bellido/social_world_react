import { useForm } from 'react-hook-form'
import { getUsersByUsername } from '../../API/profile.api'
const BrowserForm = ({handlerResults}) => {

  const { register, handleSubmit } = useForm()

  const onSubmit = async (values) => {
    const data = await getUsersByUsername(values.username)
    handlerResults(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username', { required: true })} />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default BrowserForm
