import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.logoNavContainer}>
          <Link to='/' className={s.logoLink}>
            <img src='/images/logo.svg' alt='Logo' className={s.logo} />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
