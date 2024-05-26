import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'
import {} from '../css/navbar.css'

const NavBar = () => {
    const { user, logOut} = useAuth()
    return (
        <nav className="nav">
            <ul className="nav-links">
                {
                    user ? 
                    <>
                    <li className="nav-li"><Link to={`/profile/?username=${user?.username}`} className="link">{user?.username}</Link></li>
                    <li className="nav-li"><Link to={`/`} className="link">Principal</Link></li>
                    <li className="nav-li"><Link to={`/browser`} className="link">Browser</Link></li>
                    <li className="nav-li"><Link className="link" onClick={logOut} replace to={'/login'}>LogOut</Link></li>
                    <button className="btn" onClick={()=> logOut()}>logout</button>
                    </>
                    :
                    <>
                    <li className="nav-li"><Link to={`/Login`} className="link">Login</Link></li>
                    <li className="nav-li"><Link to={`/Register`} className="link">Register</Link></li>
                    </>
                }

            </ul>
        </nav>
    )
}

export default NavBar
