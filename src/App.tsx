import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CampersPage from './pages/CampersPage/CampersPage';
import CamperPage from './pages/CamperPage/CamperPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/campers' element={<CampersPage />} />
        <Route path='/campers/:id' element={<CamperPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
