import { NavLink, Outlet } from 'react-router-dom';
import s from './CamperPage.module.css';

const CamperPage = () => {
  return (
    <div className={s.camperPage}>
      <nav>
        <NavLink to='features'>Features</NavLink>
        <NavLink to='reviews'>reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default CamperPage;
