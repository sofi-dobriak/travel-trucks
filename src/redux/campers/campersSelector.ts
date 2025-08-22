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

export const selectFeaturesList = createSelector(selectOneCamper, camper => {
  if (!camper) return [];

  return [
    { key: 'transmission', text: camper?.transmission, icon: '#icon-diagram' },
    { key: 'engine', text: camper?.engine, icon: '#icon-petrol' },
    { key: 'AC', text: 'AC', icon: '#icon-wind' },
    { key: 'bathroom', text: 'Bathroom', icon: '#icon-shower' },
    { key: 'kitchen', text: 'Kitchen', icon: '#icon-cup' },
    { key: 'TV', text: 'TV', icon: '#icon-tv' },
    { key: 'radio', text: 'Radio', icon: '#icon-radio' },
    { key: 'refrigerator', text: 'Refrigerator', icon: '#icon-fridge' },
    { key: 'microwave', text: 'Microwave', icon: '#icon-microwave' },
    { key: 'gas', text: 'Gas', icon: '#icon-gas-stove' },
    { key: 'water', text: 'Water', icon: '#icon-water-drop' },
  ];
});

export const selectVehiclesPropList = createSelector(selectOneCamper, camper => {
  if (!camper) return [];

  return [
    { key: 'form', title: 'Form', value: camper?.form },
    { key: 'length', title: 'Length', value: camper?.length },
    { key: 'width', title: 'Width', value: camper?.width },
    { key: 'height', title: 'Height', value: camper?.height },
    { key: 'consumption', title: 'Consumption', value: camper?.consumption },
  ];
});

export const selectFavCampersByIdAndTitle = createSelector(selectFavouritesCampers, favCampers => {
  return favCampers.filter(favCamper => favCamper.id && favCamper.name);
});
