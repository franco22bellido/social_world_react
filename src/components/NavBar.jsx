import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'
import {} from '../css/navbar.css'

const NavBar = () => {
    const { user, logOut, loading} = useAuth()
    return (
        <>
            { !loading &&
        <nav className="nav">
            <ul className="nav-links">
                {
                    user ? 
                    <>
                    <li className="nav-li"><Link to={`/${user?.username}`} className="link">{user?.username}</Link></li>
                    <li className="nav-li"><Link to={`/`} className="link">Feed</Link></li>
                    <li className="nav-li"><Link to={`/trends`} className="link">Trends</Link></li>
                    <li className="nav-li"><Link to={`/browser`} className="link">Browser</Link></li>
                    <li className="nav-li"><Link className="link" onClick={logOut} replace>LogOut</Link></li>
                    </>
                    :
                    <>
                    <li className="nav-li"><Link to={`/Login`} className="link">Login</Link></li>
                    <li className="nav-li"><Link to={`/Register`} className="link">Register</Link></li>
                    </>
                }

            </ul>
        </nav>
            }
            </>
    )
}

export default NavBar
