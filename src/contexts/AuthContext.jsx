import { createContext, useContext, useEffect, useState } from "react"
import { login, logout, register, verifyToken } from "../API/auth.api"

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
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
        }
    }
    const logOut = async () => {
        try {
            const res = await logout()
            console.log(res)
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const verifySession = async () => {
        try {
            const {user} = await verifyToken()
            setUser(user)
            setLoading(false)
            setIsAuthenticated(true)
        } catch (error) {
            console.log("errors")
            console.log(error)
            setUser(null)
            setIsAuthenticated(false)
            setLoading(false)
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
