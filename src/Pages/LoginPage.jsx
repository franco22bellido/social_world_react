import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
const LoginPage = () => {

    const [values, setValues] = useState()
    const { signIn } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn(values)
        console.log(res)
    }
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
