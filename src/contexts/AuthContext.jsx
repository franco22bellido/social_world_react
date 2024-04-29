import { createContext, useContext, useEffect, useState } from "react"
import { login, register, verifyToken } from "../API/auth.api"
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used withon a AuthProvider')
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const signUp = async (values) => {
        try {
            return await register(values)
        } catch (error) {
            return error
        }
    }
    const signIn = async (values) => {
        try {
            const { user, token } = await login(values)
            setIsAuthenticated(true)
            setUser(user)
            Cookies.set('token', token)
            return user;
        } catch (error) {
            return error
        }
    }

    const verifySession = async ()=>{
        const token = Cookies.get('token')
        setLoading(true)
        if(!token){
            setLoading(false)
            setUser(null)
            return setIsAuthenticated(false)
        }
        try {
            const {user} = await verifyToken(token)
            if(!user){
                setLoading(false)
                setUser(null)
                return setIsAuthenticated(false)
            }
            setUser(user)
            setIsAuthenticated(true)
            return setLoading(false)
        } catch (error) {
            console.log(error.response)
        }

    }
    useEffect(() => {
        verifySession()
    }, [])

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            loading
        }}>
            {children}
        </AuthContext.Provider>)
}
export default AuthContext
