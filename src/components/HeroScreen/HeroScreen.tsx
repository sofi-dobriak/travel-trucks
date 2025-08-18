import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import s from './HeroScreen.module.css';

const HeroScreen = () => {
  return (
    <section className={s.heroSection}>
      <Container>
        <h1 className={s.heroTitle}>Campers of your dreams</h1>
        <p className={s.heroText}>You can find everything you want in our catalog</p>
        <Link to='/campers' className={s.heroLink}>
          View Now
        </Link>
      </Container>
    </section>
  );
};

export default HeroScreen;
