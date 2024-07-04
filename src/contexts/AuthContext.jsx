import { createContext, useContext, useEffect, useState } from "react"
import { login, register, verifyToken } from "../API/auth.api"

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
    const [errors, setErrors] = useState([])

    const signUp = async (values) => {
        try {
            setLoading(true)
            const res = await register(values)
            return res;
        } catch (error) {
            const errors = error.response.data.message
            if (Array.isArray(errors)) {
                setErrors(errors)
            } else {
                setErrors([errors])
            }
        } finally {
            setLoading(false)
        }
    }
    const signIn = async (values) => {
        try {
            setLoading(true)
            const user = await login(values)
            window.localStorage.setItem('Authorization', user.authorization)
            setUser(user)
            setIsAuthenticated(true)
        } catch (error) {
            const errors = error.response.data.message
            if (Array.isArray(errors)) {
                setErrors(errors)
            } else {
                setErrors([errors])
            }
            setUser(null)
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }
    const logOut = async () => {
        try {
            window.localStorage.removeItem('Authorization')
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const verifySession = async () => {
        try {
            const { user } = await verifyToken()
            setUser(user)
            setLoading(false)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
        }

    }
    useEffect(() => {
        verifySession()
    }, [])
    useEffect(() => {
        if (errors.length > 0) {
            setTimeout(() => {
                setErrors([])
            }, 6000);
        }
    }, [errors])

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            logOut,
            user,
            isAuthenticated,
            loading,
            errors
        }}>
            {children}
        </AuthContext.Provider>)
}
export default AuthContext
