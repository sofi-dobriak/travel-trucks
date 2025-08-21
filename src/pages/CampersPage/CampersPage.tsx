import CamperList from '../../components/camper/CamperList/CamperList';
import Container from '../../components/common/Container/Container';
import FiltersBar from '../../components/filters/FiltersBar/FiltersBar';
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
