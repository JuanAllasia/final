import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import logotipo from './assets/logotipoo.png'

const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
            <Link to='/'>
                <img className="logotipo" src={logotipo}/>
            </Link>
            <Link to='/' className="NavTitle">
            <h3>{'AREA-ARENA'}</h3>
            </Link>
            <Link to='/Cart'><CartWidget/></Link>
            </div>
            <div className="NavBarOptions">
                <NavLink to={`/category/pantalones`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>pantalones</NavLink>
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>remeras</NavLink>
                <NavLink to={`/category/buzos`} className={({isActive}) => isActive ? 'NavBarOptionsButtonActive' : 'NavBarOptionsButton'}>buzos</NavLink>
            </div>
        </nav>
    )
}

export default NavBar