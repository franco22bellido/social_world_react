import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {

    const [values, setValues] = useState()
    const { signIn, isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signIn(values)
    }
    useEffect(()=> {
        if(isAuthenticated){
            return navigate('/')
        }
    }, [isAuthenticated])
    return (
        <section className='container-flex'>
            <form className='container-flex form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className='form-input' type="text" placeholder="username" onChange={({ target }) => setValues({ ...values, username: target.value })} />
                <input className='form-input' type="password" placeholder="password" onChange={({ target }) => setValues({ ...values, password: target.value })} />
                <button className='btn-red' type="submit">Sign in</button>
            </form>
        </section>
    )
}

export default LoginPage
