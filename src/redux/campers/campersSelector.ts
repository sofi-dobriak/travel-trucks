import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const selectCampers = (state: RootState) => state.campers.campers;
export const selectFavouritesCampers = (state: RootState) => state.campers.favouritesCampers;
export const selectOneCamper = (state: RootState) => state.campers.oneCamper;
export const selectIsLoading = (state: RootState) => state.campers.isLoading;
export const selectError = (state: RootState) => state.campers.error;
export const selectPage = (state: RootState) => state.campers.page;
export const selectLimit = (state: RootState) => state.campers.limit;
export const selectTotalItems = (state: RootState) => state.campers.totalItems;

export const selectTotalPages = createSelector(
  selectTotalItems,
  selectLimit,
  (totalItems, limit) => {
    return Math.ceil(totalItems / limit);
  }
);
