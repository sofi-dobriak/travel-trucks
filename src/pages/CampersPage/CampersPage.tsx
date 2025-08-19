import CamperList from '../../components/CamperList/CamperList';
import Container from '../../components/Container/Container';
import FiltersBar from '../../components/FiltersBar/FiltersBar';
import s from './CampersPage.module.css';

const CampersPage = () => {
  return (
    <div className={s.campersPageContainer}>
      <Container>
        <div className={s.campersFiltersListContainer}>
          <FiltersBar />
          <CamperList />
        </div>
      </Container>
    </div>
  );
};

export default CampersPage;
