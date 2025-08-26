import { createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit';
import type { Camper } from '../../types/camper';
import { getAllCampers, getCamperById } from './campersOperations';
import type { ErrorResponse } from '../../types/errorResponse';

interface CampersInitialState {
  campers: Camper[];
  favouritesCampers: Camper[];
  oneCamper: Camper | null;
  isLoading: boolean;
  error: ErrorResponse | null;
  page: number;
  limit: number;
  totalItems: number;
}

const initialState: CampersInitialState = {
  campers: [],
  favouritesCampers: [],
  oneCamper: null,
  isLoading: false,
  error: null,
  page: 1,
  limit: 8,
  totalItems: 0,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetCampers: state => {
      return {
        ...initialState,
        favouritesCampers: state.favouritesCampers,
      };
    },
    addFavouriteCamper: (state, action: PayloadAction<Camper>) => {
      state.favouritesCampers.push(action.payload);
    },
    removeFavouriteCamper: (state, action: PayloadAction<string>) => {
      state.favouritesCampers = state.favouritesCampers.filter(
        camper => camper.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;

        if (state.page === 1) {
          state.campers = action.payload.items;
        } else {
          state.campers = [...state.campers, ...action.payload.items];
        }

        state.totalItems = action.payload.total;
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

export const { setPage, resetCampers, addFavouriteCamper, removeFavouriteCamper } = slice.actions;
export const campersReducer = slice.reducer;
