import { Link } from 'react-router-dom';
import InfoMessage from '../../components/common/InfoMessage/InfoMessage';
import s from './NotFoundPage.module.css';
import Container from '../../components/common/Container/Container';

const NotFoundPage = () => {
  return (
    <div className={s.notFoundPageContainer}>
      <Container>
        <InfoMessage className={s.notFoundPageTitle}>Not found page</InfoMessage>
        <Link to='/' className={s.notFoundPageLink}>
          Go back to the home page
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
