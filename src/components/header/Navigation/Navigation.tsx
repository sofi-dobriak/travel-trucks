import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { addActiveClass } from '../../../utils/addActiveClass';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to='/' className={addActiveClass(s.navLink, s.active)}>
        Home
      </NavLink>
      <NavLink to='/campers' className={addActiveClass(s.navLink, s.active)}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
