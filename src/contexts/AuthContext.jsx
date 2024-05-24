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
            setLoading(true)
            const { user } = await login(values)
            setUser(user)
            setLoading(false)
            setIsAuthenticated(true)
            return user;
        } catch (error) {
            setIsAuthenticated(false)
            setLoading(false)
        }
    }
    const logOut = async ()=> {
        try {
            Cookies.remove('authorization')
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const verifySession = async () => {
        const token = Cookies.get('authorization')
        setLoading(true)
        if (!token) {
            setLoading(false)
            setUser(null)
            return setIsAuthenticated(false)
        }
        try {
            const { user } = await verifyToken()
            if (!user) {
                setLoading(false)
                setUser(null)
                return setIsAuthenticated(false)
            }
            setUser(user)
            setIsAuthenticated(true)
            return setLoading(false)
        } catch (error) {
            setIsAuthenticated(false)
            setLoading(false)
            console.log(error)
        }

    }
    useEffect(() => {
        verifySession()
    }, [])

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            logOut,
            user,
            isAuthenticated,
            loading
        }}>
            {children}
        </AuthContext.Provider>)
}
export default AuthContext
