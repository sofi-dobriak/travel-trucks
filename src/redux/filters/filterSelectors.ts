import type { RootState } from '../store';

export const selectAllFilters = (state: RootState) => state.filters;

export const selectLocation = (state: RootState) => state.filters.location;
export const selectForm = (state: RootState) => state.filters.form;
export const selectTransmission = (state: RootState) => state.filters.transmission;
export const selectAC = (state: RootState) => state.filters.AC;
export const selectBathroom = (state: RootState) => state.filters.bathroom;
export const selectKitchen = (state: RootState) => state.filters.kitchen;
export const selectTV = (state: RootState) => state.filters.TV;
