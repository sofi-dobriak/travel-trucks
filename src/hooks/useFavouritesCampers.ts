import { useCallback } from 'react';
import type { Camper } from '../types/camper';
import { useAppDispatch } from '../redux/hooks';
import { selectFavouritesCampers } from '../redux/campers/campersSelector';
import { useSelector } from 'react-redux';
import { addFavouriteCamper, removeFavouriteCamper } from '../redux/campers/campersSlice';

export const useFavouriteCampers = (camperId: string, camper: Camper) => {
  const dispatch = useAppDispatch();
  const favouritesCampers = useSelector(selectFavouritesCampers);
  const isFavourite = favouritesCampers.some(camper => camper.id === camperId);

  const handleToggleFavourite = useCallback(() => {
    if (isFavourite) {
      dispatch(removeFavouriteCamper(camperId));
    } else {
      dispatch(addFavouriteCamper(camper));
    }
  }, [isFavourite, dispatch, camperId, camper]);

  return { isFavourite, handleToggleFavourite };
};
