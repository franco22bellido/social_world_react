import { useAuth } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import LoaderCat from "./LoaderCat"

const ValidateRoute = () => {
  const {isAuthenticated, loading} = useAuth()

  if(loading) {
    return <LoaderCat loading={loading} className={'h-[400px]'}/>
  }
  
  if(!isAuthenticated && !loading){
    return <Navigate to={'/login'} replace/>
  }
  return (
    <Outlet/>

  )
}

export default ValidateRoute