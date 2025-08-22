import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { Camper } from '../../types/camper';
import type { ErrorResponse, ThunkConfig } from '../../types/errorResponse';
import type { RootState } from '../store';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

interface GetAllCampersResponse {
  total: number;
  items: Camper[];
}

interface ThunkAPIStateInterface {
  state: RootState;
  rejectValue: ErrorResponse;
}

export const getAllCampers = createAsyncThunk<GetAllCampersResponse, void, ThunkAPIStateInterface>(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      const { campers, filters } = thunkAPI.getState();
      const params = new URLSearchParams();

      params.append('page', campers.page.toString());
      params.append('limit', campers.limit.toString());

      if (filters.location) params.append('location', filters.location);
      if (filters.form) params.append('form', filters.form);
      if (filters.transmission) params.append('transmission', filters.transmission);
      if (filters.AC) params.append('AC', 'true');
      if (filters.bathroom) params.append('bathroom', 'true');
      if (filters.kitchen) params.append('kitchen', 'true');
      if (filters.TV) params.append('TV', 'true');

      const response = await instance.get<GetAllCampersResponse>(`/campers?${params}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error?.response?.data?.message || 'Unknown error';
      toast.error('Oops... Something went wrong');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const getCamperById = createAsyncThunk<Camper, string, ThunkConfig>(
  '/campers/getOneById',
  async (camperId, thunkAPI) => {
    try {
      const response = await instance.get<Camper>(`/campers/${camperId}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error?.response?.data?.message || 'Unknown error';
      toast.error('Oops... Something went wrong');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
