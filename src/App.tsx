import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CampersPage from './pages/CampersPage/CampersPage';
import CamperPage from './pages/CamperPage/CamperPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/campers' element={<CampersPage />} />
          <Route path='/campers/:id' element={<CamperPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
