import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.logoNavContainer}>
          <img src='/images/logo.svg' alt='Logo' className={s.logo} />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
