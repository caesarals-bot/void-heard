import { Link, NavLink } from 'react-router-dom'
import '../styles/styles.css'

export const NavBarPage = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <NavLink to="survey/survey-page">Encuesta</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="auth/login">Login</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="auth/register">Registro</NavLink>
                </li>
                <li className="navbar-item">
                    <a href="#logout">Logout</a>
                </li>
            </ul>
        </nav>
    )
}
