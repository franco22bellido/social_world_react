import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { user } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/${user?.username}`}>profile</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">principal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/browser">browser</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/discover">discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
