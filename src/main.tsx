import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
