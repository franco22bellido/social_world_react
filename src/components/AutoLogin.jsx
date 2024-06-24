import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Loader from './Loader'
import { useEffect } from "react"

const AutoLogin = () => {
    const { test } = useParams()
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const makeLogin = async () => {
        if (test === 'test') {
            await signIn({ username: "test", password: "password" })
            return navigate('/')
        }
        return navigate('/login')
    }
    useEffect(() => {
        makeLogin()
    }, [test])

    return (
        <Loader loading={true} />
    )
}

export default AutoLogin
