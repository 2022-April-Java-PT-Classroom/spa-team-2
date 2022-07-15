import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {

    return (
        <div>
        <div className={style.title}>
                <h1>Welcome To Jac Mysteries</h1>
                </div>
        <div className={style.header}>
            
            <ul className={style.navList}>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/about'}>About </NavLink>
                <NavLink to={'/mystery'}>Mysteries </NavLink>
                <NavLink to={'/comment'}>Comment</NavLink>
                <NavLink to={'/jac'}>Jac Enterprises</NavLink>
                <NavLink to={'/games'}>Games</NavLink>
            </ul>
            </div>
            </div>
    )
}

export default Header;