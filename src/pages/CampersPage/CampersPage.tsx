import Container from '../../components/Container/Container';
import FiltersBar from '../../components/FiltersBar/FiltersBar';
import s from './CampersPage.module.css';

const CampersPage = () => {
  return (
    <div className={s.campersPageContainer}>
      <Container>
        <FiltersBar />
      </Container>
    </div>
  );
};

export default CampersPage;
