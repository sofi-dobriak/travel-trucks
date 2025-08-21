import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

interface ActiveClassProps {
  isActive: boolean;
}

const setActiveClass = ({ isActive }: ActiveClassProps) => {
  return clsx(s.navLink, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to='/' className={setActiveClass}>
        Home
      </NavLink>
      <NavLink to='/campers' className={setActiveClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
