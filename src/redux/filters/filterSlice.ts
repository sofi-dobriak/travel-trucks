import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersInitialState {
  location: string;
  form: string;
  transmission: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
}

const initialState: FiltersInitialState = {
  location: '',
  form: '',
  transmission: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
};

export const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersInitialState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilters } = slice.actions;
export const filtersReducer = slice.reducer;
