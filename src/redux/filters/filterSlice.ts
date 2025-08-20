import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CamperForm = 'van' | 'fullyIntegrated' | 'alcove' | '';

export interface FiltersInitialState {
  location: string;
  form: CamperForm;
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
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = slice.actions;
export const filtersReducer = slice.reducer;
