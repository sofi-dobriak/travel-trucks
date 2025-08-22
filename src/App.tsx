import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Features from './components/camper/Features/Features';
import Reviews from './components/camper/Reviews/Reviews';
import Favourites from './components/camper/Favourites/Favourites';
import SharedLayout from './components/common/SharedLayout/SharedLayout';
import Loader from './components/common/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/campers' element={<CampersPage />} />
              <Route path='/campers/:id' element={<CamperPage />}>
                <Route index element={<Features />} />
                <Route path='features' element={<Features />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='favourites' element={<Favourites />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
