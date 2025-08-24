import { useState } from 'react';
import CamperList from '../../components/camper/CamperList/CamperList';
import Container from '../../components/common/Container/Container';
import FilterModal from '../../components/filters/FilterModal/FilterModal';
import FiltersBar from '../../components/filters/FiltersBar/FiltersBar';
import s from './CampersPage.module.css';

const CampersPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className={s.campersPageContainer}>
      <Container>
        <div className={s.campersFiltersListContainer}>
          <FilterModal modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
          <FiltersBar />
          <CamperList handleOpenModal={handleOpenModal} />
        </div>
      </Container>
    </div>
  );
};

export default CampersPage;
