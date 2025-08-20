import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

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
