import { createContext, useContext, useState } from "react"
import { login, register } from "../API/auth.api"
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

    const signUp = async (values) => {
        try {
            await register(values)
        } catch (error) {
            console.log(error)
        }
    }
    const signIn = async (values) => {
        try {
            const { token, user } = await login(values)
            setIsAuthenticated(true)
            setUser(user)
            Cookies.set('token', token)
            return user;
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>)
}
export default AuthContext
