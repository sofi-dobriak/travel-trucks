import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CampersPage from './pages/CampersPage/CampersPage';
import CamperPage from './pages/CamperPage/CamperPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/campers' element={<CampersPage />} />
            <Route path='/campers/:id' element={<CamperPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </Container>
    </>
  );
}

export default App;
