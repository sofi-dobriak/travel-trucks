import { createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit';
import type { Camper } from '../../types/camper';
import { getAllCampers, getCamperById } from './campersOperations';
import type { ErrorResponse } from '../../types/errorResponse';

interface CampersInitialState {
  campers: Camper[];
  oneCamper: Camper | null;
  isLoading: boolean;
  error: ErrorResponse | null;
  page: number;
  limit: number;
  totalItems: number;
}

const initialState: CampersInitialState = {
  campers: [],
  oneCamper: null,
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
  totalItems: 0,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
        state.totalItems = action.payload.length;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneCamper = action.payload;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllCampers.pending, getCamperById.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllCampers.rejected, getCamperById.rejected), (state, action) => {
        state.isLoading = false;
        state.campers = [];
        state.oneCamper = null;
        state.totalItems = 0;
        state.error = action.payload || null;
      });
  },
});

export const { setPage } = slice.actions;
export const campersReducer = slice.reducer;
