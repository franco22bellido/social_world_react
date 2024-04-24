import { useAuth } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ValidateRoute = () => {
  const {isAuthenticated, loading} = useAuth()

  if(loading) {
    return <div>loading...</div>
  }
  
  if(!isAuthenticated && !loading){
    return <Navigate to={'/login'} replace/>
  }
  return (
    <Outlet/>

  )
}

export default ValidateRoute