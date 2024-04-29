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
        <article>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={({ target }) => setValues({ ...values, username: target.value })} />
                <input type="password" placeholder="password" onChange={({ target }) => setValues({ ...values, password: target.value })} />
                <button type="submit">Sign in</button>
            </form>
        </article>
    )
}

export default LoginPage
