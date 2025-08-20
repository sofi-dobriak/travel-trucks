import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CampersPage from './pages/CampersPage/CampersPage';
import CamperPage from './pages/CamperPage/CamperPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/campers' element={<CampersPage />} />
            <Route path='/campers/:id' element={<CamperPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
