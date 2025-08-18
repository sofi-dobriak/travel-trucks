import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/campersSlice';
import { filtersReducer } from './filters/filterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
