import { useAuth } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import Loader from "./Loader"

const ValidateRoute = () => {
  const {isAuthenticated, loading} = useAuth()

  if(loading) {
    return <Loader loading={loading} className={'h-[400px]'}/>
  }
  
  if(!isAuthenticated && !loading){
    return <Navigate to={'/login'} replace/>
  }
  return (
    <Outlet/>

  )
}

export default ValidateRoute