import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName='active' exact={true} to={'/'}>Home</NavLink>
            <NavLink activeClassName='active' to={'/timer'}>Timer</NavLink>
            <NavLink activeClassName='active' to={'/todos'}>Todos</NavLink>
            <NavLink activeClassName='active' to={'/blogs'}>Blogs</NavLink>
        </div>
    );
}

export default Nav; 